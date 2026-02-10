package androidx.browser.customtabs;

import android.app.ActivityOptions;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.os.LocaleList;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.SparseArray;
import androidx.browser.customtabs.a;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final Intent f2032a;

    /* renamed from: b  reason: collision with root package name */
    public final Bundle f2033b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static ActivityOptions a() {
            return ActivityOptions.makeBasic();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.browser.customtabs.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0024b {
        static String a() {
            LocaleList adjustedDefault = LocaleList.getAdjustedDefault();
            if (adjustedDefault.size() > 0) {
                return adjustedDefault.get(0).toLanguageTag();
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static void a(ActivityOptions activityOptions, boolean z10) {
            activityOptions.setShareIdentityEnabled(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: c  reason: collision with root package name */
        private ArrayList f2036c;

        /* renamed from: d  reason: collision with root package name */
        private ActivityOptions f2037d;

        /* renamed from: e  reason: collision with root package name */
        private ArrayList f2038e;

        /* renamed from: f  reason: collision with root package name */
        private SparseArray f2039f;

        /* renamed from: g  reason: collision with root package name */
        private Bundle f2040g;

        /* renamed from: j  reason: collision with root package name */
        private boolean f2043j;

        /* renamed from: a  reason: collision with root package name */
        private final Intent f2034a = new Intent("android.intent.action.VIEW");

        /* renamed from: b  reason: collision with root package name */
        private final a.C0023a f2035b = new a.C0023a();

        /* renamed from: h  reason: collision with root package name */
        private int f2041h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f2042i = true;

        private void b() {
            Bundle bundle;
            String a10 = C0024b.a();
            if (!TextUtils.isEmpty(a10)) {
                if (this.f2034a.hasExtra("com.android.browser.headers")) {
                    bundle = this.f2034a.getBundleExtra("com.android.browser.headers");
                } else {
                    bundle = new Bundle();
                }
                if (!bundle.containsKey("Accept-Language")) {
                    bundle.putString("Accept-Language", a10);
                    this.f2034a.putExtra("com.android.browser.headers", bundle);
                }
            }
        }

        private void e(IBinder iBinder, PendingIntent pendingIntent) {
            Bundle bundle = new Bundle();
            bundle.putBinder("android.support.customtabs.extra.SESSION", iBinder);
            if (pendingIntent != null) {
                bundle.putParcelable("android.support.customtabs.extra.SESSION_ID", pendingIntent);
            }
            this.f2034a.putExtras(bundle);
        }

        private void f() {
            if (this.f2037d == null) {
                this.f2037d = a.a();
            }
            c.a(this.f2037d, this.f2043j);
        }

        public b a() {
            Bundle bundle = null;
            if (!this.f2034a.hasExtra("android.support.customtabs.extra.SESSION")) {
                e(null, null);
            }
            ArrayList<? extends Parcelable> arrayList = this.f2036c;
            if (arrayList != null) {
                this.f2034a.putParcelableArrayListExtra("android.support.customtabs.extra.MENU_ITEMS", arrayList);
            }
            ArrayList<? extends Parcelable> arrayList2 = this.f2038e;
            if (arrayList2 != null) {
                this.f2034a.putParcelableArrayListExtra("android.support.customtabs.extra.TOOLBAR_ITEMS", arrayList2);
            }
            this.f2034a.putExtra("android.support.customtabs.extra.EXTRA_ENABLE_INSTANT_APPS", this.f2042i);
            this.f2034a.putExtras(this.f2035b.a().a());
            Bundle bundle2 = this.f2040g;
            if (bundle2 != null) {
                this.f2034a.putExtras(bundle2);
            }
            if (this.f2039f != null) {
                Bundle bundle3 = new Bundle();
                bundle3.putSparseParcelableArray("androidx.browser.customtabs.extra.COLOR_SCHEME_PARAMS", this.f2039f);
                this.f2034a.putExtras(bundle3);
            }
            this.f2034a.putExtra("androidx.browser.customtabs.extra.SHARE_STATE", this.f2041h);
            int i10 = Build.VERSION.SDK_INT;
            b();
            if (i10 >= 34) {
                f();
            }
            ActivityOptions activityOptions = this.f2037d;
            if (activityOptions != null) {
                bundle = activityOptions.toBundle();
            }
            return new b(this.f2034a, bundle);
        }

        public d c(androidx.browser.customtabs.a aVar) {
            this.f2040g = aVar.a();
            return this;
        }

        public d d(Context context, int i10, int i11) {
            this.f2034a.putExtra("android.support.customtabs.extra.EXIT_ANIMATION_BUNDLE", androidx.core.app.d.a(context, i10, i11).b());
            return this;
        }

        public d g(boolean z10) {
            this.f2034a.putExtra("android.support.customtabs.extra.TITLE_VISIBILITY", z10 ? 1 : 0);
            return this;
        }

        public d h(Context context, int i10, int i11) {
            this.f2037d = ActivityOptions.makeCustomAnimation(context, i10, i11);
            return this;
        }
    }

    b(Intent intent, Bundle bundle) {
        this.f2032a = intent;
        this.f2033b = bundle;
    }

    public void a(Context context, Uri uri) {
        this.f2032a.setData(uri);
        androidx.core.content.a.o(context, this.f2032a, this.f2033b);
    }
}
