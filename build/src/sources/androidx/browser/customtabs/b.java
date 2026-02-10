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
    public final Intent f2035a;

    /* renamed from: b  reason: collision with root package name */
    public final Bundle f2036b;

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
    public static class C0021b {
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
        private ArrayList f2039c;

        /* renamed from: d  reason: collision with root package name */
        private ActivityOptions f2040d;

        /* renamed from: e  reason: collision with root package name */
        private ArrayList f2041e;

        /* renamed from: f  reason: collision with root package name */
        private SparseArray f2042f;

        /* renamed from: g  reason: collision with root package name */
        private Bundle f2043g;

        /* renamed from: j  reason: collision with root package name */
        private boolean f2046j;

        /* renamed from: a  reason: collision with root package name */
        private final Intent f2037a = new Intent("android.intent.action.VIEW");

        /* renamed from: b  reason: collision with root package name */
        private final a.C0020a f2038b = new a.C0020a();

        /* renamed from: h  reason: collision with root package name */
        private int f2044h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f2045i = true;

        private void b() {
            Bundle bundle;
            String a10 = C0021b.a();
            if (!TextUtils.isEmpty(a10)) {
                if (this.f2037a.hasExtra("com.android.browser.headers")) {
                    bundle = this.f2037a.getBundleExtra("com.android.browser.headers");
                } else {
                    bundle = new Bundle();
                }
                if (!bundle.containsKey("Accept-Language")) {
                    bundle.putString("Accept-Language", a10);
                    this.f2037a.putExtra("com.android.browser.headers", bundle);
                }
            }
        }

        private void e(IBinder iBinder, PendingIntent pendingIntent) {
            Bundle bundle = new Bundle();
            bundle.putBinder("android.support.customtabs.extra.SESSION", iBinder);
            if (pendingIntent != null) {
                bundle.putParcelable("android.support.customtabs.extra.SESSION_ID", pendingIntent);
            }
            this.f2037a.putExtras(bundle);
        }

        private void f() {
            if (this.f2040d == null) {
                this.f2040d = a.a();
            }
            c.a(this.f2040d, this.f2046j);
        }

        public b a() {
            Bundle bundle = null;
            if (!this.f2037a.hasExtra("android.support.customtabs.extra.SESSION")) {
                e(null, null);
            }
            ArrayList<? extends Parcelable> arrayList = this.f2039c;
            if (arrayList != null) {
                this.f2037a.putParcelableArrayListExtra("android.support.customtabs.extra.MENU_ITEMS", arrayList);
            }
            ArrayList<? extends Parcelable> arrayList2 = this.f2041e;
            if (arrayList2 != null) {
                this.f2037a.putParcelableArrayListExtra("android.support.customtabs.extra.TOOLBAR_ITEMS", arrayList2);
            }
            this.f2037a.putExtra("android.support.customtabs.extra.EXTRA_ENABLE_INSTANT_APPS", this.f2045i);
            this.f2037a.putExtras(this.f2038b.a().a());
            Bundle bundle2 = this.f2043g;
            if (bundle2 != null) {
                this.f2037a.putExtras(bundle2);
            }
            if (this.f2042f != null) {
                Bundle bundle3 = new Bundle();
                bundle3.putSparseParcelableArray("androidx.browser.customtabs.extra.COLOR_SCHEME_PARAMS", this.f2042f);
                this.f2037a.putExtras(bundle3);
            }
            this.f2037a.putExtra("androidx.browser.customtabs.extra.SHARE_STATE", this.f2044h);
            int i10 = Build.VERSION.SDK_INT;
            b();
            if (i10 >= 34) {
                f();
            }
            ActivityOptions activityOptions = this.f2040d;
            if (activityOptions != null) {
                bundle = activityOptions.toBundle();
            }
            return new b(this.f2037a, bundle);
        }

        public d c(androidx.browser.customtabs.a aVar) {
            this.f2043g = aVar.a();
            return this;
        }

        public d d(Context context, int i10, int i11) {
            this.f2037a.putExtra("android.support.customtabs.extra.EXIT_ANIMATION_BUNDLE", androidx.core.app.d.a(context, i10, i11).b());
            return this;
        }

        public d g(boolean z10) {
            this.f2037a.putExtra("android.support.customtabs.extra.TITLE_VISIBILITY", z10 ? 1 : 0);
            return this;
        }

        public d h(Context context, int i10, int i11) {
            this.f2040d = ActivityOptions.makeCustomAnimation(context, i10, i11);
            return this;
        }
    }

    b(Intent intent, Bundle bundle) {
        this.f2035a = intent;
        this.f2036b = bundle;
    }

    public void a(Context context, Uri uri) {
        this.f2035a.setData(uri);
        androidx.core.content.a.o(context, this.f2035a, this.f2036b);
    }
}
