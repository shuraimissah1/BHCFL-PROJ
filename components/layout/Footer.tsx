export default function Footer() {
  return (
    <footer className="bg-[#e6e6e6] px-6 pb-12 pt-10 text-center text-[#222] sm:px-10">
      <div className="mx-auto max-w-[1200px] space-y-3 text-[15px] leading-relaxed">
        <p>Black Homeschoolers of Central Florida, Inc. EIN: 81-3448261</p>
        <p>Email: blackhomeschoolerscfl@gmail.com Phone: (386)837-6270, (386)873-2016</p>
        <p>Physical Address: 1609 S. SR-15A, Suite 7, DeLand, Florida 32720</p>
        <p>Mailing Address: 1067 West Seagate Drive Deltona, Florida 32725-2276</p>
        <p className="pt-3 text-[13px]">
          A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE
          OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE
          WITHIN THE STATE. REGISTRATION DOES NOT IMPLY ENDORSEMENT, APPROVAL,
          OR RECOMMENDATION BY THE STATE.
        </p>
        <p className="text-[13px]">
          1-800-HELP-FLA{" "}
          <a
            href="http://www.floridaconsumerhelp.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            www.FloridaConsumerHelp.com
          </a>{" "}
          STATE REG#: CH49729
        </p>
        <p className="pt-1 text-[13px]">©2023 by Black Homeschoolers of Central Florida, Inc.. Made with Squarespace</p>
      </div>
    </footer>
  );
}
