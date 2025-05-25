interface BannerSectionProps {
  backgroundImage: string;
  subTitle?: string;
  title?: string;
  children?: React.ReactNode;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  backgroundImage,
  subTitle,
  title,
  children,
}) => {
  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="bg-black/10 h-full flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            {subTitle && <p className="text-xl">{subTitle}</p>}
            {title && <h1 className="text-5xl font-bold">{title}</h1>}
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
