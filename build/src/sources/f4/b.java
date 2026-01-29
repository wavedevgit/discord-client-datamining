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
    private final List f24354a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements d {

        /* renamed from: a  reason: collision with root package name */
        private g4.a f24355a;

        public a(Context context) {
            this.f24355a = new g4.a(context);
        }

        @Override // f4.b.d
        public WebResourceResponse a(String str) {
            try {
                return new WebResourceResponse(g4.a.f(str), null, this.f24355a.h(str));
            } catch (IOException e10) {
                Log.e("WebViewAssetLoader", "Error opening asset path: " + str, e10);
                return new WebResourceResponse(null, null, null);
            }
        }
    }

    /* renamed from: f4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0319b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f24356a = false;

        /* renamed from: b  reason: collision with root package name */
        private String f24357b = "appassets.androidplatform.net";

        /* renamed from: c  reason: collision with root package name */
        private List f24358c = new ArrayList();

        public C0319b a(String str, d dVar) {
            this.f24358c.add(new e(this.f24357b, str, this.f24356a, dVar));
            return this;
        }

        public b b() {
            return new b(this.f24358c);
        }

        public C0319b c(String str) {
            this.f24357b = str;
            return this;
        }

        public C0319b d(boolean z10) {
            this.f24356a = z10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements d {

        /* renamed from: b  reason: collision with root package name */
        private static final String[] f24359b = {"app_webview/", "databases/", "lib/", "shared_prefs/", "code_cache/"};

        /* renamed from: a  reason: collision with root package name */
        private final File f24360a;

        public c(Context context, File file) {
            try {
                this.f24360a = new File(g4.a.a(file));
                if (b(context)) {
                    return;
                }
                throw new IllegalArgumentException("The given directory \"" + file + "\" doesn't exist under an allowed app internal storage directory");
            } catch (IOException e10) {
                throw new IllegalArgumentException("Failed to resolve the canonical path for the given directory: " + file.getPath(), e10);
            }
        }

        private boolean b(Context context) {
            String a10 = g4.a.a(this.f24360a);
            String a11 = g4.a.a(context.getCacheDir());
            String a12 = g4.a.a(g4.a.c(context));
            if ((!a10.startsWith(a11) && !a10.startsWith(a12)) || a10.equals(a11) || a10.equals(a12)) {
                return false;
            }
            for (String str : f24359b) {
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
                b10 = g4.a.b(this.f24360a, str);
            } catch (IOException e10) {
                Log.e("WebViewAssetLoader", "Error opening the requested path: " + str, e10);
            }
            if (b10 != null) {
                return new WebResourceResponse(g4.a.f(str), null, g4.a.i(b10));
            }
            Log.e("WebViewAssetLoader", String.format("The requested file: %s is outside the mounted directory: %s", str, this.f24360a));
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
        final boolean f24361a;

        /* renamed from: b  reason: collision with root package name */
        final String f24362b;

        /* renamed from: c  reason: collision with root package name */
        final String f24363c;

        /* renamed from: d  reason: collision with root package name */
        final d f24364d;

        e(String str, String str2, boolean z10, d dVar) {
            if (!str2.isEmpty() && str2.charAt(0) == '/') {
                if (str2.endsWith("/")) {
                    this.f24362b = str;
                    this.f24363c = str2;
                    this.f24361a = z10;
                    this.f24364d = dVar;
                    return;
                }
                throw new IllegalArgumentException("Path should end with a slash '/'");
            }
            throw new IllegalArgumentException("Path should start with a slash '/'.");
        }

        public String a(String str) {
            return str.replaceFirst(this.f24363c, "");
        }

        public d b(Uri uri) {
            if (uri.getScheme().equals("http") && !this.f24361a) {
                return null;
            }
            if ((!uri.getScheme().equals("http") && !uri.getScheme().equals("https")) || !uri.getAuthority().equals(this.f24362b) || !uri.getPath().startsWith(this.f24363c)) {
                return null;
            }
            return this.f24364d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f implements d {

        /* renamed from: a  reason: collision with root package name */
        private g4.a f24365a;

        public f(Context context) {
            this.f24365a = new g4.a(context);
        }

        @Override // f4.b.d
        public WebResourceResponse a(String str) {
            try {
                return new WebResourceResponse(g4.a.f(str), null, this.f24365a.j(str));
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
        this.f24354a = list;
    }

    public WebResourceResponse a(Uri uri) {
        WebResourceResponse a10;
        for (e eVar : this.f24354a) {
            d b10 = eVar.b(uri);
            if (b10 != null && (a10 = b10.a(eVar.a(uri.getPath()))) != null) {
                return a10;
            }
        }
        return null;
    }
}
