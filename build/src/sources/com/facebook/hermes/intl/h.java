package com.facebook.hermes.intl;

import android.icu.text.RuleBasedCollator;
import com.facebook.hermes.intl.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements com.facebook.hermes.intl.a {

    /* renamed from: a  reason: collision with root package name */
    private RuleBasedCollator f10289a = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10290a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f10291b;

        static {
            int[] iArr = new int[a.b.values().length];
            f10291b = iArr;
            try {
                iArr[a.b.UPPER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10291b[a.b.LOWER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f10291b[a.b.FALSE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[a.c.values().length];
            f10290a = iArr2;
            try {
                iArr2[a.c.BASE.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f10290a[a.c.ACCENT.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f10290a[a.c.CASE.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f10290a[a.c.VARIANT.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
        }
    }

    @Override // com.facebook.hermes.intl.a
    public int a(String str, String str2) {
        return this.f10289a.compare(str, str2);
    }

    @Override // com.facebook.hermes.intl.a
    public a.c b() {
        RuleBasedCollator ruleBasedCollator = this.f10289a;
        if (ruleBasedCollator == null) {
            return a.c.LOCALE;
        }
        int strength = ruleBasedCollator.getStrength();
        if (strength == 0) {
            if (this.f10289a.isCaseLevel()) {
                return a.c.CASE;
            }
            return a.c.BASE;
        } else if (strength == 1) {
            return a.c.ACCENT;
        } else {
            return a.c.VARIANT;
        }
    }

    @Override // com.facebook.hermes.intl.a
    public com.facebook.hermes.intl.a c(boolean z10) {
        if (z10) {
            this.f10289a.setAlternateHandlingShifted(true);
        }
        return this;
    }

    @Override // com.facebook.hermes.intl.a
    public com.facebook.hermes.intl.a d(a.b bVar) {
        int i10 = a.f10291b[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                this.f10289a.setCaseFirstDefault();
                return this;
            }
            this.f10289a.setLowerCaseFirst(true);
            return this;
        }
        this.f10289a.setUpperCaseFirst(true);
        return this;
    }

    @Override // com.facebook.hermes.intl.a
    public com.facebook.hermes.intl.a e(boolean z10) {
        if (z10) {
            this.f10289a.setNumericCollation(da.d.e(Boolean.TRUE));
        }
        return this;
    }

    @Override // com.facebook.hermes.intl.a
    public com.facebook.hermes.intl.a f(da.b bVar) {
        RuleBasedCollator ruleBasedCollator = (RuleBasedCollator) android.icu.text.Collator.getInstance(((da.h) bVar).h());
        this.f10289a = ruleBasedCollator;
        ruleBasedCollator.setDecomposition(17);
        return this;
    }

    @Override // com.facebook.hermes.intl.a
    public com.facebook.hermes.intl.a g(a.c cVar) {
        int i10 = a.f10290a[cVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        return this;
                    }
                    this.f10289a.setStrength(2);
                    return this;
                }
                this.f10289a.setStrength(0);
                this.f10289a.setCaseLevel(true);
                return this;
            }
            this.f10289a.setStrength(1);
            return this;
        }
        this.f10289a.setStrength(0);
        return this;
    }
}
