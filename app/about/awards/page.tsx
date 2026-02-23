const PVSA_OFFICIAL_IMAGE = "/images/awards/pvsa-official.jpeg";
const PVSA_MEDALS_IMAGE = "/images/awards/pvsa-medals.jpg";
const PVSA_TITLE_IMAGE = "/images/awards/pvsa-title.jpg";
const PVSA_REQUIREMENTS_IMAGE = "/images/awards/pvsa-hours-table.jpeg";
const SERVICE_HOURS_IMAGE = "/images/awards/pvsa-walk.jpg";
const PVSA_PURPOSE_IMAGE = "/images/awards/pvsa-purpose.jpg";
const AWARD_YEAR_IMAGE = "/images/awards/pvsa-seal.jpg";
const SERVICE_HOURS_CHART_URL =
  "https://www.bhcflstrong.org/s/Community-Service-Hours-Chart.pdf";

export default function AwardsPage() {
  return (
    <main
      className="bg-[#d9d9d9] px-6 pb-16 pt-10 text-[#1d1d1d] sm:px-10 lg:px-14"
      style={{ fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif" }}
    >
      <div className="mx-auto max-w-[1400px] space-y-10">
        <section className="grid gap-4 md:grid-cols-2">
          <img
            src={PVSA_OFFICIAL_IMAGE}
            alt="Official President's Volunteer Service Award certifying organization graphic"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <img
            src={PVSA_MEDALS_IMAGE}
            alt="President's Volunteer Service Award medals and certificates"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </section>

        <section className="mx-auto max-w-[900px]">
          <img
            src={PVSA_TITLE_IMAGE}
            alt="The President's Volunteer Service Award banner"
            className="h-auto w-full"
            loading="lazy"
          />
        </section>

        <section className="space-y-6">
          <p className="text-center text-xl font-semibold uppercase tracking-[0.03em] text-[#b7220a] sm:text-2xl">
            An Initiative of the Corporation for National and Community Service
            and Administered by Points of Light
          </p>

          <p className="text-[1.08rem] leading-[1.7] text-[#2f2f2f] sm:text-xl">
            The President&apos;s Volunteer Service Award (PVSA) is a civil award
            bestowed by the President of the United States and is awarded to
            individuals, families and groups that have achieved a certain
            standard measured by the number of hours of service over a 12-month
            period.
          </p>
          <p className="text-[1.08rem] leading-[1.7] text-[#2f2f2f] sm:text-xl">
            In 2019, Black Homeschoolers of Central Florida, Inc. became a
            Certifying Organization for this award and has awarded homeschooled
            youth and youth adults with this prestigious award based on those
            who have met minimum volunteer service hours in one year.
          </p>
        </section>

        <section className="space-y-6 border-t-[3px] border-[#b7220a] pt-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            ELIGIBILITY
          </h2>

          <img
            src={PVSA_REQUIREMENTS_IMAGE}
            alt="PVSA volunteer eligibility and hours requirements"
            className="h-auto w-full max-w-[980px]"
            loading="lazy"
          />

          <h3 className="text-2xl font-semibold sm:text-3xl">
            VOLUNTEER ELIGIBILITY
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-[1.02rem] leading-[1.7] text-[#2f2f2f] sm:text-xl">
            <li>
              United States citizen or lawful permanent resident of the United
              States (i.e., green card holder)
            </li>
            <li>Must be at least five years old</li>
            <li>
              Completes eligible service within a 12-month period, and within
              the age requirements
            </li>
            <li>
              Hours are measured over a 12-month period and awards are
              designated based on cumulative hours.
            </li>
            <li>
              Eligible service does not include donating funds, political
              lobbying, conducting duties of regular employment, and service
              through a religious organization (unless the service is secular in
              nature).
            </li>
          </ul>
        </section>

        <section className="space-y-6 border-t-[3px] border-[#b7220a] pt-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            COMMUNITY SERVICE HOURS SERVED
          </h2>
          <img
            src={SERVICE_HOURS_IMAGE}
            alt="Community service hours served by year"
            className="h-auto w-full max-w-[980px]"
            loading="lazy"
          />
          <a
            href={SERVICE_HOURS_CHART_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-lg font-semibold uppercase tracking-[0.02em] text-[#b7220a] underline underline-offset-4 sm:text-xl"
          >
            To View Community Service Hours Chart Click Here
          </a>
        </section>

        <section className="space-y-6 border-t-[3px] border-[#b7220a] pt-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            PURPOSE OF PVSA
          </h2>
          <img
            src={PVSA_PURPOSE_IMAGE}
            alt="Purpose of PVSA"
            className="h-auto w-full max-w-[980px]"
            loading="lazy"
          />
          <p className="text-[1.08rem] leading-[1.7] text-[#2f2f2f] sm:text-xl">
            The purpose of this award is to thank and honor Americans, by
            recognizing their positive impact through service to others and
            inspiring others to take action.
          </p>
        </section>

        <section className="space-y-6 border-t-[3px] border-[#b7220a] pt-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            BHCFL AWARD YEAR
          </h2>
          <img
            src={AWARD_YEAR_IMAGE}
            alt="President's Volunteer Service Award seal"
            className="h-auto w-full max-w-[520px]"
            loading="lazy"
          />
          <p className="text-[1.08rem] leading-[1.7] text-[#2f2f2f] sm:text-xl">
            BHCFL has two award years in one year:
            <br />
            Summer Cohort: January through June
            <br />
            Winter Cohort: July through December
          </p>
        </section>
      </div>
    </main>
  );
}
