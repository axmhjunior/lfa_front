import { TitleComponent } from "../title";
import { ContactForm } from "./contact-form";
import React from "react";
import "../../i18n/i18n";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id={t("contacts.name")}
      className="space-y-6 p-6 bg-blue-50 rounded-lg shadow-md"
    >
      <div>
        <TitleComponent text={t("contacts.title")} />
        <h3 className="font-bold text-lg mt-4 flex items-center">
          <AiOutlineEnvironment  className="mr-2 text-blue-600" />
          {t("contacts.adress")}
        </h3>
        <p className="font-light">{t("contacts.text")}</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">{t("contacts.title")}</h3>
        <a
          href="mailto:geral@lfadvogados.co.mz"
          className="text-blue-600 underline mt-2 flex items-center"
        >
          <AiOutlineMail className="mr-2" />
          geral@lfadvogados.co.mz
        </a>
        <a
          href="tel:+258877499115"
          className="text-blue-600 underline mt-2 flex items-center"
        >
          <AiOutlinePhone className="mr-2" />
          (+258) 87 749 9115
        </a>
        <a
          href="tel:+258847499116"
          className="text-blue-600 underline mt-2 flex items-center"
        >
          <AiOutlinePhone className="mr-2" />
          (+258) 84 749 9116
        </a>
        <a
          href="tel:+258847893310"
          className="text-blue-600 underline mt-2 flex items-center"
        >
          <AiOutlinePhone className="mr-2" />
          (+258) 84 789 3310
        </a>
      </div>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://web.facebook.com/LFAAdvocacia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-2xl"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/company/lfa-advogados-ldta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-2xl"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
      <ContactForm />
    </section>
  );
};
