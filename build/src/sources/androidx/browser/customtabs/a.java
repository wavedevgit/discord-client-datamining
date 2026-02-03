package androidx.browser.customtabs;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Integer f1917a;

    /* renamed from: b  reason: collision with root package name */
    public final Integer f1918b;

    /* renamed from: c  reason: collision with root package name */
    public final Integer f1919c;

    /* renamed from: d  reason: collision with root package name */
    public final Integer f1920d;

    /* renamed from: androidx.browser.customtabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0024a {

        /* renamed from: a  reason: collision with root package name */
        private Integer f1921a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f1922b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f1923c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f1924d;

        public a a() {
            return new a(this.f1921a, this.f1922b, this.f1923c, this.f1924d);
        }

        public C0024a b(int i10) {
            this.f1923c = Integer.valueOf(i10 | (-16777216));
            return this;
        }

        public C0024a c(int i10) {
            this.f1922b = Integer.valueOf(i10);
            return this;
        }

        public C0024a d(int i10) {
            this.f1921a = Integer.valueOf(i10 | (-16777216));
            return this;
        }
    }

    a(Integer num, Integer num2, Integer num3, Integer num4) {
        this.f1917a = num;
        this.f1918b = num2;
        this.f1919c = num3;
        this.f1920d = num4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle a() {
        Bundle bundle = new Bundle();
        Integer num = this.f1917a;
        if (num != null) {
            bundle.putInt("android.support.customtabs.extra.TOOLBAR_COLOR", num.intValue());
        }
        Integer num2 = this.f1918b;
        if (num2 != null) {
            bundle.putInt("android.support.customtabs.extra.SECONDARY_TOOLBAR_COLOR", num2.intValue());
        }
        Integer num3 = this.f1919c;
        if (num3 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_COLOR", num3.intValue());
        }
        Integer num4 = this.f1920d;
        if (num4 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_DIVIDER_COLOR", num4.intValue());
        }
        return bundle;
    }
}
