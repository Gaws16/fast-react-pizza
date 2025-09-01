import Button from "../ui/Button";

function UpdateItemQuantity() {
  return (
    <div className="flex gap-1 md:gap-1">
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
