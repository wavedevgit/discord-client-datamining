package com.facebook.hermes.intl;

import android.icu.text.CompactDecimalFormat;
import android.icu.text.DecimalFormat;
import android.icu.text.DecimalFormatSymbols;
import android.icu.text.MeasureFormat;
import android.icu.text.NumberFormat;
import android.icu.text.NumberingSystem;
import android.icu.util.Currency;
import android.icu.util.Measure;
import android.icu.util.MeasureUnit;
import android.icu.util.ULocale;
import android.os.Build;
import com.facebook.hermes.intl.c;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.text.AttributedCharacterIterator;
import java.text.Format;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j implements c {

    /* renamed from: a  reason: collision with root package name */
    private Format f10011a;

    /* renamed from: b  reason: collision with root package name */
    private android.icu.text.NumberFormat f10012b;

    /* renamed from: c  reason: collision with root package name */
    private da.h f10013c;

    /* renamed from: d  reason: collision with root package name */
    private c.h f10014d;

    /* renamed from: e  reason: collision with root package name */
    private MeasureUnit f10015e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10016a;

        static {
            int[] iArr = new int[c.g.values().length];
            f10016a = iArr;
            try {
                iArr[c.g.NEVER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10016a[c.g.ALWAYS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f10016a[c.g.EXCEPTZERO.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public static int n(String str) {
        try {
            return Currency.getInstance(str).getDefaultFractionDigits();
        } catch (IllegalArgumentException unused) {
            throw new da.f("Invalid currency code !");
        }
    }

    private void o(android.icu.text.NumberFormat numberFormat, da.b bVar, c.h hVar) {
        this.f10012b = numberFormat;
        this.f10011a = numberFormat;
        this.f10013c = (da.h) bVar;
        this.f10014d = hVar;
        numberFormat.setRoundingMode(4);
    }

    private static MeasureUnit p(String str) {
        for (MeasureUnit measureUnit : MeasureUnit.getAvailable()) {
            if (!measureUnit.getSubtype().equals(str)) {
                String subtype = measureUnit.getSubtype();
                if (subtype.equals(measureUnit.getType() + "-" + str)) {
                }
            }
            return measureUnit;
        }
        throw new da.f("Unknown unit: " + str);
    }

    @Override // com.facebook.hermes.intl.c
    public AttributedCharacterIterator a(double d10) {
        try {
            try {
                Format format = this.f10011a;
                if ((format instanceof MeasureFormat) && this.f10015e != null) {
                    return format.formatToCharacterIterator(new Measure(Double.valueOf(d10), this.f10015e));
                }
                return format.formatToCharacterIterator(Double.valueOf(d10));
            } catch (RuntimeException unused) {
                return android.icu.text.NumberFormat.getInstance(ULocale.forLanguageTag("en")).formatToCharacterIterator(Double.valueOf(d10));
            }
        } catch (NumberFormatException unused2) {
            return android.icu.text.NumberFormat.getInstance(ULocale.getDefault()).formatToCharacterIterator(Double.valueOf(d10));
        } catch (Exception unused3) {
            return android.icu.text.NumberFormat.getInstance(ULocale.forLanguageTag("en")).formatToCharacterIterator(Double.valueOf(d10));
        }
    }

    @Override // com.facebook.hermes.intl.c
    public String b(double d10) {
        try {
            try {
                Format format = this.f10011a;
                if ((format instanceof MeasureFormat) && this.f10015e != null) {
                    return format.format(new Measure(Double.valueOf(d10), this.f10015e));
                }
                return format.format(Double.valueOf(d10));
            } catch (NumberFormatException unused) {
                return android.icu.text.NumberFormat.getInstance(ULocale.getDefault()).format(d10);
            }
        } catch (RuntimeException unused2) {
            return android.icu.text.NumberFormat.getInstance(ULocale.forLanguageTag("en")).format(d10);
        }
    }

    @Override // com.facebook.hermes.intl.c
    public String c(da.b bVar) {
        return NumberingSystem.getInstance((ULocale) bVar.h()).getName();
    }

    @Override // com.facebook.hermes.intl.c
    public String l(AttributedCharacterIterator.Attribute attribute, double d10) {
        if (attribute == NumberFormat.Field.SIGN) {
            if (Double.compare(d10, 0.0d) >= 0) {
                return "plusSign";
            }
            return "minusSign";
        } else if (attribute == NumberFormat.Field.INTEGER) {
            if (Double.isNaN(d10)) {
                return "nan";
            }
            if (Double.isInfinite(d10)) {
                return "infinity";
            }
            return InquiryField.IntegerField.TYPE;
        } else if (attribute == NumberFormat.Field.FRACTION) {
            return "fraction";
        } else {
            if (attribute == NumberFormat.Field.EXPONENT) {
                return "exponentInteger";
            }
            if (attribute == NumberFormat.Field.EXPONENT_SIGN) {
                return "exponentMinusSign";
            }
            if (attribute == NumberFormat.Field.EXPONENT_SYMBOL) {
                return "exponentSeparator";
            }
            if (attribute == NumberFormat.Field.DECIMAL_SEPARATOR) {
                return "decimal";
            }
            if (attribute == NumberFormat.Field.GROUPING_SEPARATOR) {
                return "group";
            }
            if (attribute == NumberFormat.Field.PERCENT) {
                return "percentSign";
            }
            if (attribute == NumberFormat.Field.PERMILLE) {
                return "permilleSign";
            }
            if (attribute == NumberFormat.Field.CURRENCY) {
                return "currency";
            }
            if (attribute.toString().equals("android.icu.text.NumberFormat$Field(compact)")) {
                return "compact";
            }
            return "literal";
        }
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: m */
    public j k(da.b bVar, String str, c.h hVar, c.d dVar, c.e eVar, c.b bVar2) {
        CompactDecimalFormat.CompactStyle compactStyle;
        if (!str.isEmpty()) {
            try {
                if (NumberingSystem.getInstanceByName(da.d.h(str)) != null) {
                    ArrayList arrayList = new ArrayList();
                    arrayList.add(da.d.h(str));
                    bVar.f("nu", arrayList);
                } else {
                    throw new da.f("Invalid numbering system: " + str);
                }
            } catch (RuntimeException unused) {
                throw new da.f("Invalid numbering system: " + str);
            }
        }
        if (eVar == c.e.COMPACT && (hVar == c.h.DECIMAL || hVar == c.h.UNIT)) {
            if (bVar2 == c.b.SHORT) {
                compactStyle = CompactDecimalFormat.CompactStyle.SHORT;
            } else {
                compactStyle = CompactDecimalFormat.CompactStyle.LONG;
            }
            o(CompactDecimalFormat.getInstance((ULocale) bVar.h(), compactStyle), bVar, hVar);
            return this;
        }
        android.icu.text.NumberFormat numberFormat = android.icu.text.NumberFormat.getInstance((ULocale) bVar.h(), hVar.d(eVar, dVar));
        if (eVar == c.e.ENGINEERING) {
            numberFormat.setMaximumIntegerDigits(3);
        }
        o(numberFormat, bVar, hVar);
        return this;
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: q */
    public j d(String str, c.EnumC0140c enumC0140c) {
        if (this.f10014d == c.h.CURRENCY) {
            Currency currency = Currency.getInstance(str);
            this.f10012b.setCurrency(currency);
            if (enumC0140c != c.EnumC0140c.CODE) {
                str = currency.getName(this.f10013c.h(), enumC0140c.d(), (boolean[]) null);
            }
            android.icu.text.NumberFormat numberFormat = this.f10012b;
            if (numberFormat instanceof DecimalFormat) {
                DecimalFormat decimalFormat = (DecimalFormat) numberFormat;
                DecimalFormatSymbols decimalFormatSymbols = decimalFormat.getDecimalFormatSymbols();
                decimalFormatSymbols.setCurrencySymbol(str);
                decimalFormat.setDecimalFormatSymbols(decimalFormatSymbols);
            }
        }
        return this;
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: r */
    public j h(c.f fVar, int i10, int i11) {
        if (fVar == c.f.FRACTION_DIGITS) {
            if (i10 >= 0) {
                this.f10012b.setMinimumFractionDigits(i10);
            }
            if (i11 >= 0) {
                this.f10012b.setMaximumFractionDigits(i11);
            }
            android.icu.text.NumberFormat numberFormat = this.f10012b;
            if (numberFormat instanceof DecimalFormat) {
                ((DecimalFormat) numberFormat).setSignificantDigitsUsed(false);
            }
        }
        return this;
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: s */
    public j g(boolean z10) {
        this.f10012b.setGroupingUsed(z10);
        return this;
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: t */
    public j f(int i10) {
        if (i10 != -1) {
            this.f10012b.setMinimumIntegerDigits(i10);
        }
        return this;
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: u */
    public j j(c.g gVar) {
        android.icu.text.NumberFormat numberFormat = this.f10012b;
        if (numberFormat instanceof DecimalFormat) {
            DecimalFormat decimalFormat = (DecimalFormat) numberFormat;
            DecimalFormatSymbols decimalFormatSymbols = decimalFormat.getDecimalFormatSymbols();
            if (Build.VERSION.SDK_INT >= 31) {
                int i10 = a.f10016a[gVar.ordinal()];
                if (i10 != 1) {
                    if (i10 == 2 || i10 == 3) {
                        decimalFormat.setSignAlwaysShown(true);
                        return this;
                    }
                } else {
                    decimalFormat.setSignAlwaysShown(false);
                    return this;
                }
            } else {
                int i11 = a.f10016a[gVar.ordinal()];
                if (i11 != 1) {
                    if (i11 == 2 || i11 == 3) {
                        if (!decimalFormat.getNegativePrefix().isEmpty()) {
                            decimalFormat.setPositivePrefix(new String(new char[]{decimalFormatSymbols.getPlusSign()}));
                        }
                        if (!decimalFormat.getNegativeSuffix().isEmpty()) {
                            decimalFormat.setPositiveSuffix(new String(new char[]{decimalFormatSymbols.getPlusSign()}));
                            return this;
                        }
                    }
                } else {
                    decimalFormat.setPositivePrefix("");
                    decimalFormat.setPositiveSuffix("");
                    decimalFormat.setNegativePrefix("");
                    decimalFormat.setNegativeSuffix("");
                }
            }
        }
        return this;
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: v */
    public j e(c.f fVar, int i10, int i11) {
        android.icu.text.NumberFormat numberFormat = this.f10012b;
        if ((numberFormat instanceof DecimalFormat) && fVar == c.f.SIGNIFICANT_DIGITS) {
            DecimalFormat decimalFormat = (DecimalFormat) numberFormat;
            if (i10 >= 0) {
                decimalFormat.setMinimumSignificantDigits(i10);
            }
            if (i11 >= 0) {
                if (i11 >= decimalFormat.getMinimumSignificantDigits()) {
                    decimalFormat.setMaximumSignificantDigits(i11);
                } else {
                    throw new da.f("maximumSignificantDigits should be at least equal to minimumSignificantDigits");
                }
            }
            decimalFormat.setSignificantDigitsUsed(true);
        }
        return this;
    }

    @Override // com.facebook.hermes.intl.c
    /* renamed from: w */
    public j i(String str, c.i iVar) {
        if (this.f10014d == c.h.UNIT) {
            this.f10015e = p(str);
            this.f10011a = MeasureFormat.getInstance(this.f10013c.h(), iVar.d(), this.f10012b);
        }
        return this;
    }
}
