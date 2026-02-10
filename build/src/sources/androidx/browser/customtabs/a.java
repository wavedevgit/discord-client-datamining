package androidx.browser.customtabs;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Integer f2024a;

    /* renamed from: b  reason: collision with root package name */
    public final Integer f2025b;

    /* renamed from: c  reason: collision with root package name */
    public final Integer f2026c;

    /* renamed from: d  reason: collision with root package name */
    public final Integer f2027d;

    /* renamed from: androidx.browser.customtabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0023a {

        /* renamed from: a  reason: collision with root package name */
        private Integer f2028a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f2029b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f2030c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f2031d;

        public a a() {
            return new a(this.f2028a, this.f2029b, this.f2030c, this.f2031d);
        }

        public C0023a b(int i10) {
            this.f2030c = Integer.valueOf(i10 | (-16777216));
            return this;
        }

        public C0023a c(int i10) {
            this.f2029b = Integer.valueOf(i10);
            return this;
        }

        public C0023a d(int i10) {
            this.f2028a = Integer.valueOf(i10 | (-16777216));
            return this;
        }
    }

    a(Integer num, Integer num2, Integer num3, Integer num4) {
        this.f2024a = num;
        this.f2025b = num2;
        this.f2026c = num3;
        this.f2027d = num4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle a() {
        Bundle bundle = new Bundle();
        Integer num = this.f2024a;
        if (num != null) {
            bundle.putInt("android.support.customtabs.extra.TOOLBAR_COLOR", num.intValue());
        }
        Integer num2 = this.f2025b;
        if (num2 != null) {
            bundle.putInt("android.support.customtabs.extra.SECONDARY_TOOLBAR_COLOR", num2.intValue());
        }
        Integer num3 = this.f2026c;
        if (num3 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_COLOR", num3.intValue());
        }
        Integer num4 = this.f2027d;
        if (num4 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_DIVIDER_COLOR", num4.intValue());
        }
        return bundle;
    }
}
