package androidx.browser.customtabs;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Integer f1886a;

    /* renamed from: b  reason: collision with root package name */
    public final Integer f1887b;

    /* renamed from: c  reason: collision with root package name */
    public final Integer f1888c;

    /* renamed from: d  reason: collision with root package name */
    public final Integer f1889d;

    /* renamed from: androidx.browser.customtabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0022a {

        /* renamed from: a  reason: collision with root package name */
        private Integer f1890a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f1891b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f1892c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f1893d;

        public a a() {
            return new a(this.f1890a, this.f1891b, this.f1892c, this.f1893d);
        }

        public C0022a b(int i10) {
            this.f1892c = Integer.valueOf(i10 | (-16777216));
            return this;
        }

        public C0022a c(int i10) {
            this.f1891b = Integer.valueOf(i10);
            return this;
        }

        public C0022a d(int i10) {
            this.f1890a = Integer.valueOf(i10 | (-16777216));
            return this;
        }
    }

    a(Integer num, Integer num2, Integer num3, Integer num4) {
        this.f1886a = num;
        this.f1887b = num2;
        this.f1888c = num3;
        this.f1889d = num4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle a() {
        Bundle bundle = new Bundle();
        Integer num = this.f1886a;
        if (num != null) {
            bundle.putInt("android.support.customtabs.extra.TOOLBAR_COLOR", num.intValue());
        }
        Integer num2 = this.f1887b;
        if (num2 != null) {
            bundle.putInt("android.support.customtabs.extra.SECONDARY_TOOLBAR_COLOR", num2.intValue());
        }
        Integer num3 = this.f1888c;
        if (num3 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_COLOR", num3.intValue());
        }
        Integer num4 = this.f1889d;
        if (num4 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_DIVIDER_COLOR", num4.intValue());
        }
        return bundle;
    }
}
