package androidx.browser.customtabs;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final Integer f1998a;

    /* renamed from: b  reason: collision with root package name */
    public final Integer f1999b;

    /* renamed from: c  reason: collision with root package name */
    public final Integer f2000c;

    /* renamed from: d  reason: collision with root package name */
    public final Integer f2001d;

    /* renamed from: androidx.browser.customtabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0023a {

        /* renamed from: a  reason: collision with root package name */
        private Integer f2002a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f2003b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f2004c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f2005d;

        public a a() {
            return new a(this.f2002a, this.f2003b, this.f2004c, this.f2005d);
        }

        public C0023a b(int i10) {
            this.f2004c = Integer.valueOf(i10 | (-16777216));
            return this;
        }

        public C0023a c(int i10) {
            this.f2003b = Integer.valueOf(i10);
            return this;
        }

        public C0023a d(int i10) {
            this.f2002a = Integer.valueOf(i10 | (-16777216));
            return this;
        }
    }

    a(Integer num, Integer num2, Integer num3, Integer num4) {
        this.f1998a = num;
        this.f1999b = num2;
        this.f2000c = num3;
        this.f2001d = num4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle a() {
        Bundle bundle = new Bundle();
        Integer num = this.f1998a;
        if (num != null) {
            bundle.putInt("android.support.customtabs.extra.TOOLBAR_COLOR", num.intValue());
        }
        Integer num2 = this.f1999b;
        if (num2 != null) {
            bundle.putInt("android.support.customtabs.extra.SECONDARY_TOOLBAR_COLOR", num2.intValue());
        }
        Integer num3 = this.f2000c;
        if (num3 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_COLOR", num3.intValue());
        }
        Integer num4 = this.f2001d;
        if (num4 != null) {
            bundle.putInt("androidx.browser.customtabs.extra.NAVIGATION_BAR_DIVIDER_COLOR", num4.intValue());
        }
        return bundle;
    }
}
