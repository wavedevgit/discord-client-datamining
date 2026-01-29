package androidx.browser.customtabs;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Integer f1873a;

    /* renamed from: b  reason: collision with root package name */
    public final Integer f1874b;

    /* renamed from: c  reason: collision with root package name */
    public final Integer f1875c;

    /* renamed from: d  reason: collision with root package name */
    public final Integer f1876d;

    /* renamed from: androidx.browser.customtabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0020a {

        /* renamed from: a  reason: collision with root package name */
        private Integer f1877a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f1878b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f1879c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f1880d;

        public a a() {
            return new a(this.f1877a, this.f1878b, this.f1879c, this.f1880d);
        }

        public C0020a b(int i10) {
            this.f1879c = Integer.valueOf(i10 | (-16777216));
            return this;
        }

        public C0020a c(int i10) {
            this.f1878b = Integer.valueOf(i10);
            return this;
        }

        public C0020a d(int i10) {
            this.f1877a = Integer.valueOf(i10 | (-16777216));
            return this;
        }
    }

    a(Integer num, Integer num2, Integer num3, Integer num4) {
        this.f1873a = num;
        this.f1874b = num2;
        this.f1875c = num3;
        this.f1876d = num4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle a() {
        Bundle bundle = new Bundle();
        Integer num = this.f1873a;
        if (num != null) {
            bundle.putInt("android.support.customtabs.extra.TOOLBAR_COLOR", num.intValue());
        }
        Integer num2 = this.f1874b;
        if (num2 != null) {
            bundle.putInt("android.support.customtabs.extra.SECONDARY_TOOLBAR_COLOR", num2.intValue());
        }
        Integer num3 = this.f1875c;
        if (num3 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_COLOR", num3.intValue());
        }
        Integer num4 = this.f1876d;
        if (num4 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_DIVIDER_COLOR", num4.intValue());
        }
        return bundle;
    }
}
