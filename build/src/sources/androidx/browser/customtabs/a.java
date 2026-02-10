package androidx.browser.customtabs;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Integer f2027a;

    /* renamed from: b  reason: collision with root package name */
    public final Integer f2028b;

    /* renamed from: c  reason: collision with root package name */
    public final Integer f2029c;

    /* renamed from: d  reason: collision with root package name */
    public final Integer f2030d;

    /* renamed from: androidx.browser.customtabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0020a {

        /* renamed from: a  reason: collision with root package name */
        private Integer f2031a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f2032b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f2033c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f2034d;

        public a a() {
            return new a(this.f2031a, this.f2032b, this.f2033c, this.f2034d);
        }

        public C0020a b(int i10) {
            this.f2033c = Integer.valueOf(i10 | (-16777216));
            return this;
        }

        public C0020a c(int i10) {
            this.f2032b = Integer.valueOf(i10);
            return this;
        }

        public C0020a d(int i10) {
            this.f2031a = Integer.valueOf(i10 | (-16777216));
            return this;
        }
    }

    a(Integer num, Integer num2, Integer num3, Integer num4) {
        this.f2027a = num;
        this.f2028b = num2;
        this.f2029c = num3;
        this.f2030d = num4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle a() {
        Bundle bundle = new Bundle();
        Integer num = this.f2027a;
        if (num != null) {
            bundle.putInt("android.support.customtabs.extra.TOOLBAR_COLOR", num.intValue());
        }
        Integer num2 = this.f2028b;
        if (num2 != null) {
            bundle.putInt("android.support.customtabs.extra.SECONDARY_TOOLBAR_COLOR", num2.intValue());
        }
        Integer num3 = this.f2029c;
        if (num3 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_COLOR", num3.intValue());
        }
        Integer num4 = this.f2030d;
        if (num4 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_DIVIDER_COLOR", num4.intValue());
        }
        return bundle;
    }
}
