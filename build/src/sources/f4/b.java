package f4;

import android.content.Context;
import android.content.res.Resources;
import android.net.Uri;
import android.util.Log;
import android.webkit.WebResourceResponse;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f23157a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements d {

        /* renamed from: a  reason: collision with root package name */
        private g4.a f23158a;

        public a(Context context) {
            this.f23158a = new g4.a(context);
        }

        @Override // f4.b.d
        public WebResourceResponse a(String str) {
            try {
                return new WebResourceResponse(g4.a.f(str), null, this.f23158a.h(str));
            } catch (IOException e10) {
                Log.e("WebViewAssetLoader", "Error opening asset path: " + str, e10);
                return new WebResourceResponse(null, null, null);
            }
        }
    }

    /* renamed from: f4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0308b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f23159a = false;

        /* renamed from: b  reason: collision with root package name */
        private String f23160b = "appassets.androidplatform.net";

        /* renamed from: c  reason: collision with root package name */
        private List f23161c = new ArrayList();

        public C0308b a(String str, d dVar) {
            this.f23161c.add(new e(this.f23160b, str, this.f23159a, dVar));
            return this;
        }

        public b b() {
            return new b(this.f23161c);
        }

        public C0308b c(String str) {
            this.f23160b = str;
            return this;
        }

        public C0308b d(boolean z10) {
            this.f23159a = z10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements d {

        /* renamed from: b  reason: collision with root package name */
        private static final String[] f23162b = {"app_webview/", "databases/", "lib/", "shared_prefs/", "code_cache/"};

        /* renamed from: a  reason: collision with root package name */
        private final File f23163a;

        public c(Context context, File file) {
            try {
                this.f23163a = new File(g4.a.a(file));
                if (b(context)) {
                    return;
                }
                throw new IllegalArgumentException("The given directory \"" + file + "\" doesn't exist under an allowed app internal storage directory");
            } catch (IOException e10) {
                throw new IllegalArgumentException("Failed to resolve the canonical path for the given directory: " + file.getPath(), e10);
            }
        }

        private boolean b(Context context) {
            String a10 = g4.a.a(this.f23163a);
            String a11 = g4.a.a(context.getCacheDir());
            String a12 = g4.a.a(g4.a.c(context));
            if ((!a10.startsWith(a11) && !a10.startsWith(a12)) || a10.equals(a11) || a10.equals(a12)) {
                return false;
            }
            for (String str : f23162b) {
                if (a10.startsWith(a12 + str)) {
                    return false;
                }
            }
            return true;
        }

        @Override // f4.b.d
        public WebResourceResponse a(String str) {
            File b10;
            try {
                b10 = g4.a.b(this.f23163a, str);
            } catch (IOException e10) {
                Log.e("WebViewAssetLoader", "Error opening the requested path: " + str, e10);
            }
            if (b10 != null) {
                return new WebResourceResponse(g4.a.f(str), null, g4.a.i(b10));
            }
            Log.e("WebViewAssetLoader", String.format("The requested file: %s is outside the mounted directory: %s", str, this.f23163a));
            return new WebResourceResponse(null, null, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface d {
        WebResourceResponse a(String str);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e {

        /* renamed from: a  reason: collision with root package name */
        final boolean f23164a;

        /* renamed from: b  reason: collision with root package name */
        final String f23165b;

        /* renamed from: c  reason: collision with root package name */
        final String f23166c;

        /* renamed from: d  reason: collision with root package name */
        final d f23167d;

        e(String str, String str2, boolean z10, d dVar) {
            if (!str2.isEmpty() && str2.charAt(0) == '/') {
                if (str2.endsWith("/")) {
                    this.f23165b = str;
                    this.f23166c = str2;
                    this.f23164a = z10;
                    this.f23167d = dVar;
                    return;
                }
                throw new IllegalArgumentException("Path should end with a slash '/'");
            }
            throw new IllegalArgumentException("Path should start with a slash '/'.");
        }

        public String a(String str) {
            return str.replaceFirst(this.f23166c, "");
        }

        public d b(Uri uri) {
            if (uri.getScheme().equals("http") && !this.f23164a) {
                return null;
            }
            if ((!uri.getScheme().equals("http") && !uri.getScheme().equals("https")) || !uri.getAuthority().equals(this.f23165b) || !uri.getPath().startsWith(this.f23166c)) {
                return null;
            }
            return this.f23167d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f implements d {

        /* renamed from: a  reason: collision with root package name */
        private g4.a f23168a;

        public f(Context context) {
            this.f23168a = new g4.a(context);
        }

        @Override // f4.b.d
        public WebResourceResponse a(String str) {
            try {
                return new WebResourceResponse(g4.a.f(str), null, this.f23168a.j(str));
            } catch (Resources.NotFoundException e10) {
                Log.e("WebViewAssetLoader", "Resource not found from the path: " + str, e10);
                return new WebResourceResponse(null, null, null);
            } catch (IOException e11) {
                Log.e("WebViewAssetLoader", "Error opening resource from the path: " + str, e11);
                return new WebResourceResponse(null, null, null);
            }
        }
    }

    b(List list) {
        this.f23157a = list;
    }

    public WebResourceResponse a(Uri uri) {
        WebResourceResponse a10;
        for (e eVar : this.f23157a) {
            d b10 = eVar.b(uri);
            if (b10 != null && (a10 = b10.a(eVar.a(uri.getPath()))) != null) {
                return a10;
            }
        }
        return null;
    }
}
