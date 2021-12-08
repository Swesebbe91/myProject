import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const stringMessageSmall = "Värdet måste vara längre än 2 tecken";
  const stringMessageLong = "Värdet får inte vara längre än 30 tecken";
  const stringMessageObligatoriskt = "Detta är obligatoriskt att fylla i";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data, e);
    window.localStorage.setItem("MyForm", JSON.stringify(data));
    reset();
  };
  const onError = (errors, e) => console.log(errors, e);

  console.log("errors", errors);

  return (
    <div className="form-column ">
      <form onSubmit={handleSubmit(onSubmit, onError)} className="content">
        <p> Lägg till info </p>
        <input
          {...register("förnamn", {
            required: {
              value: true,
              message: stringMessageObligatoriskt,
            },
            maxLength: { value: 30, message: stringMessageLong },
          })}
          placeholder="Förnamn"
        />
        <input
          {...register("efternamn", {
            required: {
              value: true,
              message: stringMessageObligatoriskt,
            },
            minLength: {
              value: 2,
              message: stringMessageSmall,
            },

            maxLength: {
              value: 30,
              message: stringMessageLong,
            },
          })}
          placeholder="Efternamn"
        />
        <input
          {...register("adress", {
            required: {
              value: true,
              message: stringMessageObligatoriskt,
            },
            minLength: {
              value: 2,
              message: stringMessageSmall,
            },

            maxLength: {
              value: 20,
              message: "Adressen kan inte vara längre än 20 tecken",
            },
          })}
          placeholder="Adress"
        />
        <input
          {...register("postkod", {
            required: {
              value: true,
              message: stringMessageObligatoriskt,
            },

            minLength: {
              value: 5,
              message: "Endast 5 tecken",
            },

            maxLength: { value: 5, message: "Endast 5 tecken" },
          })}
          placeholder="Postkod (xxxxx)"
        />

        <input {...register("stad", { required: true })} placeholder="Stad" />

        <input
          {...register("e-Mail", {
            required: {
              value: true,
              message: stringMessageObligatoriskt,
            },

            minLength: {
              value: 2,
              message: stringMessageSmall,
            },

            maxLength: {
              value: 30,
              message: stringMessageLong,
            },

            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          placeholder="E-mail"
        />
        <input
          {...register("mobilnummer", {
            required: {
              value: true,
              message: stringMessageObligatoriskt,
            },

            minLength: {
              value: 10,
              message: "ett mobilnummer innehåller 10 tecken (utan sträck)",
            },

            maxLength: {
              value: 10,
              message: "Ett mobilnummer innehåller 10 tecken (utan sträck)",
            },
          })}
          placeholder="mobilnummer"
        />
        <select {...register("distans")}>
          <option value="">Välj distans...</option>
          <option value="5kmL">Löpning 5 km</option>
          <option value="10kmL">Löpning 10 km</option>
          <option value="5kmP">Promenad 5 km</option>
        </select>

        <select {...register("shirts")}>
          <option value="">Välj T-shirt storlek...</option>
          <option value="none">Ingen tack!</option>
          <option value="XS">Xs</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
