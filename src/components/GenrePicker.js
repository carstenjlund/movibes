import { useForm } from "react-hook-form";
import _ from "lodash";

const GenrePicker = () => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      action: true,
      adventure: true,
      animated: true,
    },
  });

  const handleChange = () => {
    console.log("something changed");
    let values = getValues();
    console.log(values);
  };
  const handleClick = (e) => {
    e.preventDefault();
    //console.log("unchecking");
    let values = getValues();
    //console.log(values);

    _.map(values, (__, key) => {
      setValue(key, false);
    });

    // for (const key in values) {
    //   if (values.hasOwnProperty(key)) {
    //     //console.log(`${key}: ${values[key]}`);
    //     setValue(key, false);
    //   }
    //   console.log(getValues());
    //filter movies to only show chosen caterories
  };

  return (
    <form onChange={handleChange}>
      <h2>Categories</h2>
      <button onClick={handleClick}>uncheck all</button>
      <div className="formGroup">
        <input
          type="checkbox"
          id="action"
          placeholder="action"
          {...register("action", {})}
        />
        <label htmlFor="action">Action</label>
      </div>
      <div className="formGroup">
        <input
          id="adventure"
          type="checkbox"
          placeholder="adventure"
          {...register("adventure", {})}
        />
        <label htmlFor="adventure">Adventure</label>
      </div>
      <div className="formGroup">
        <input
          id="animated"
          type="checkbox"
          placeholder="animated"
          {...register("animated", {})}
        />
        <label htmlFor="animated">Animated</label>
      </div>
    </form>
  );
};

export default GenrePicker;
