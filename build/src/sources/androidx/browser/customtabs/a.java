package androidx.browser.customtabs;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Integer f2327a;

    /* renamed from: b  reason: collision with root package name */
    public final Integer f2328b;

    /* renamed from: c  reason: collision with root package name */
    public final Integer f2329c;

    /* renamed from: d  reason: collision with root package name */
    public final Integer f2330d;

    /* renamed from: androidx.browser.customtabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0021a {

        /* renamed from: a  reason: collision with root package name */
        private Integer f2331a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f2332b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f2333c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f2334d;

        public a a() {
            return new a(this.f2331a, this.f2332b, this.f2333c, this.f2334d);
        }

        public C0021a b(int i10) {
            this.f2333c = Integer.valueOf(i10 | (-16777216));
            return this;
        }

        public C0021a c(int i10) {
            this.f2332b = Integer.valueOf(i10);
            return this;
        }

        public C0021a d(int i10) {
            this.f2331a = Integer.valueOf(i10 | (-16777216));
            return this;
        }
    }

    a(Integer num, Integer num2, Integer num3, Integer num4) {
        this.f2327a = num;
        this.f2328b = num2;
        this.f2329c = num3;
        this.f2330d = num4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle a() {
        Bundle bundle = new Bundle();
        Integer num = this.f2327a;
        if (num != null) {
            bundle.putInt("android.support.customtabs.extra.TOOLBAR_COLOR", num.intValue());
        }
        Integer num2 = this.f2328b;
        if (num2 != null) {
            bundle.putInt("android.support.customtabs.extra.SECONDARY_TOOLBAR_COLOR", num2.intValue());
        }
        Integer num3 = this.f2329c;
        if (num3 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_COLOR", num3.intValue());
        }
        Integer num4 = this.f2330d;
        if (num4 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_DIVIDER_COLOR", num4.intValue());
        }
        return bundle;
    }
}
