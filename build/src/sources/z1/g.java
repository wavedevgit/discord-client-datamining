package z1;

import android.content.Context;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.CancellationSignal;
import android.os.Handler;
import com.facebook.react.views.text.ReactFontManager;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import r1.k;
import x.d0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final Uri f55537a;

        /* renamed from: b  reason: collision with root package name */
        private final int f55538b;

        /* renamed from: c  reason: collision with root package name */
        private final int f55539c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f55540d;

        /* renamed from: e  reason: collision with root package name */
        private final String f55541e;

        /* renamed from: f  reason: collision with root package name */
        private final int f55542f;

        public b(Uri uri, int i10, int i11, boolean z10, int i12) {
            this(uri, i10, i11, z10, null, i12);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static b a(Uri uri, int i10, int i11, boolean z10, int i12) {
            return new b(uri, i10, i11, z10, i12);
        }

        public int b() {
            return this.f55542f;
        }

        public String c() {
            if (i()) {
                return this.f55537a.getAuthority();
            }
            return null;
        }

        public int d() {
            return this.f55538b;
        }

        public Uri e() {
            return this.f55537a;
        }

        public String f() {
            return this.f55541e;
        }

        public int g() {
            return this.f55539c;
        }

        public boolean h() {
            return this.f55540d;
        }

        public boolean i() {
            return Objects.equals(this.f55537a.getScheme(), "systemfont");
        }

        public b(Uri uri, int i10, int i11, boolean z10, String str, int i12) {
            this.f55537a = (Uri) b2.e.g(uri);
            this.f55538b = i10;
            this.f55539c = i11;
            this.f55540d = z10;
            this.f55541e = str;
            this.f55542f = i12;
        }

        public b(String str, String str2) {
            this.f55537a = new Uri.Builder().scheme("systemfont").authority(str).build();
            this.f55538b = 0;
            this.f55539c = ReactFontManager.TypefaceStyle.NORMAL;
            this.f55540d = false;
            this.f55541e = str2;
            this.f55542f = 0;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        public abstract void a(int i10);

        public abstract void b(Typeface typeface);
    }

    public static Typeface a(Context context, CancellationSignal cancellationSignal, b[] bVarArr) {
        return k.b(context, cancellationSignal, bVarArr, 0);
    }

    public static a b(Context context, CancellationSignal cancellationSignal, e eVar) {
        List a10;
        a10 = d0.a(new Object[]{eVar});
        return d.e(context, a10, cancellationSignal);
    }

    public static Typeface c(Context context, List list, int i10, boolean z10, int i11, Handler handler, c cVar) {
        z1.a aVar = new z1.a(cVar, h.b(handler));
        if (z10) {
            if (list.size() <= 1) {
                return f.e(context, (e) list.get(0), aVar, i10, i11);
            }
            throw new IllegalArgumentException("Fallbacks with blocking fetches are not supported for performance reasons");
        }
        return f.d(context, list, i10, null, aVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f55535a;

        /* renamed from: b  reason: collision with root package name */
        private final List f55536b;

        public a(int i10, b[] bVarArr) {
            this.f55535a = i10;
            this.f55536b = Collections.singletonList(bVarArr);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static a a(int i10, List list) {
            return new a(i10, list);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static a b(int i10, b[] bVarArr) {
            return new a(i10, bVarArr);
        }

        public b[] c() {
            return (b[]) this.f55536b.get(0);
        }

        public List d() {
            return this.f55536b;
        }

        public int e() {
            return this.f55535a;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean f() {
            if (this.f55536b.size() > 1) {
                return true;
            }
            return false;
        }

        a(int i10, List list) {
            this.f55535a = i10;
            this.f55536b = list;
        }
    }
}
