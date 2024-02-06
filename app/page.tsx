import Badge from "@/components/Badge";
import ChatIcon from "@mui/icons-material/Chat";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <main className="p-4 grid gap-16 md:gap-8 md:grid-cols-3">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex items-center gap-4 mb-4 w-full m-2 md:m-0">
          <AcUnitIcon className="w-8 h-8" />
          <span className="text-2xl font-bold">SampleUI</span>
        </div>
        <div className="flex gap-4">
          <Badge>
            <ChatIcon />
          </Badge>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Chat to us</h2>
            <p className="text-neutral-600">
              Our friendly team is here to help.
            </p>
            <p className="mt-2">support@sampleui.com</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Badge>
            <LocationOnIcon />
          </Badge>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Visit us</h2>
            <p className="text-neutral-600">Come say hello at our office.</p>
            <p className="mt-2">
              2108 N ST
              <br />
              Sacramento CA 95816
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Badge>
            <Phone />
          </Badge>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Call us</h2>
            <p className="text-neutral-600">Mon-Fri from 8am to 5pm</p>
            <p className="mt-2">+1 (111) 111-1111</p>
          </div>
        </div>
      </div>
      <div className="col-start-1  md:col-span-2">
        <ContactForm />
      </div>
    </main>
  );
}
