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
    public final Intent f1925a;

    /* renamed from: b  reason: collision with root package name */
    public final Bundle f1926b;

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
    public static class C0025b {
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
        private ArrayList f1929c;

        /* renamed from: d  reason: collision with root package name */
        private ActivityOptions f1930d;

        /* renamed from: e  reason: collision with root package name */
        private ArrayList f1931e;

        /* renamed from: f  reason: collision with root package name */
        private SparseArray f1932f;

        /* renamed from: g  reason: collision with root package name */
        private Bundle f1933g;

        /* renamed from: j  reason: collision with root package name */
        private boolean f1936j;

        /* renamed from: a  reason: collision with root package name */
        private final Intent f1927a = new Intent("android.intent.action.VIEW");

        /* renamed from: b  reason: collision with root package name */
        private final a.C0024a f1928b = new a.C0024a();

        /* renamed from: h  reason: collision with root package name */
        private int f1934h = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f1935i = true;

        private void b() {
            Bundle bundle;
            String a10 = C0025b.a();
            if (!TextUtils.isEmpty(a10)) {
                if (this.f1927a.hasExtra("com.android.browser.headers")) {
                    bundle = this.f1927a.getBundleExtra("com.android.browser.headers");
                } else {
                    bundle = new Bundle();
                }
                if (!bundle.containsKey("Accept-Language")) {
                    bundle.putString("Accept-Language", a10);
                    this.f1927a.putExtra("com.android.browser.headers", bundle);
                }
            }
        }

        private void e(IBinder iBinder, PendingIntent pendingIntent) {
            Bundle bundle = new Bundle();
            bundle.putBinder("android.support.customtabs.extra.SESSION", iBinder);
            if (pendingIntent != null) {
                bundle.putParcelable("android.support.customtabs.extra.SESSION_ID", pendingIntent);
            }
            this.f1927a.putExtras(bundle);
        }

        private void f() {
            if (this.f1930d == null) {
                this.f1930d = a.a();
            }
            c.a(this.f1930d, this.f1936j);
        }

        public b a() {
            Bundle bundle = null;
            if (!this.f1927a.hasExtra("android.support.customtabs.extra.SESSION")) {
                e(null, null);
            }
            ArrayList<? extends Parcelable> arrayList = this.f1929c;
            if (arrayList != null) {
                this.f1927a.putParcelableArrayListExtra("android.support.customtabs.extra.MENU_ITEMS", arrayList);
            }
            ArrayList<? extends Parcelable> arrayList2 = this.f1931e;
            if (arrayList2 != null) {
                this.f1927a.putParcelableArrayListExtra("android.support.customtabs.extra.TOOLBAR_ITEMS", arrayList2);
            }
            this.f1927a.putExtra("android.support.customtabs.extra.EXTRA_ENABLE_INSTANT_APPS", this.f1935i);
            this.f1927a.putExtras(this.f1928b.a().a());
            Bundle bundle2 = this.f1933g;
            if (bundle2 != null) {
                this.f1927a.putExtras(bundle2);
            }
            if (this.f1932f != null) {
                Bundle bundle3 = new Bundle();
                bundle3.putSparseParcelableArray("androidx.browser.customtabs.extra.COLOR_SCHEME_PARAMS", this.f1932f);
                this.f1927a.putExtras(bundle3);
            }
            this.f1927a.putExtra("androidx.browser.customtabs.extra.SHARE_STATE", this.f1934h);
            int i10 = Build.VERSION.SDK_INT;
            b();
            if (i10 >= 34) {
                f();
            }
            ActivityOptions activityOptions = this.f1930d;
            if (activityOptions != null) {
                bundle = activityOptions.toBundle();
            }
            return new b(this.f1927a, bundle);
        }

        public d c(androidx.browser.customtabs.a aVar) {
            this.f1933g = aVar.a();
            return this;
        }

        public d d(Context context, int i10, int i11) {
            this.f1927a.putExtra("android.support.customtabs.extra.EXIT_ANIMATION_BUNDLE", androidx.core.app.d.a(context, i10, i11).b());
            return this;
        }

        public d g(boolean z10) {
            this.f1927a.putExtra("android.support.customtabs.extra.TITLE_VISIBILITY", z10 ? 1 : 0);
            return this;
        }

        public d h(Context context, int i10, int i11) {
            this.f1930d = ActivityOptions.makeCustomAnimation(context, i10, i11);
            return this;
        }
    }

    b(Intent intent, Bundle bundle) {
        this.f1925a = intent;
        this.f1926b = bundle;
    }

    public void a(Context context, Uri uri) {
        this.f1925a.setData(uri);
        androidx.core.content.a.o(context, this.f1925a, this.f1926b);
    }
}
