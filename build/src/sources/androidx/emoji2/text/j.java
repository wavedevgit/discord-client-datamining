package androidx.emoji2.text;

import android.content.Context;
import android.content.pm.PackageManager;
import android.database.ContentObserver;
import android.graphics.Typeface;
import android.os.Handler;
import androidx.emoji2.text.e;
import androidx.emoji2.text.j;
import java.nio.ByteBuffer;
import java.util.concurrent.Executor;
import java.util.concurrent.ThreadPoolExecutor;
import r1.s;
import z1.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends e.c {

    /* renamed from: k  reason: collision with root package name */
    private static final a f4036k = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        public Typeface a(Context context, g.b bVar) {
            return z1.g.a(context, null, new g.b[]{bVar});
        }

        public g.a b(Context context, z1.e eVar) {
            return z1.g.b(context, null, eVar);
        }

        public void c(Context context, ContentObserver contentObserver) {
            context.getContentResolver().unregisterContentObserver(contentObserver);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements e.h {

        /* renamed from: a  reason: collision with root package name */
        private final Context f4037a;

        /* renamed from: b  reason: collision with root package name */
        private final z1.e f4038b;

        /* renamed from: c  reason: collision with root package name */
        private final a f4039c;

        /* renamed from: d  reason: collision with root package name */
        private final Object f4040d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private Handler f4041e;

        /* renamed from: f  reason: collision with root package name */
        private Executor f4042f;

        /* renamed from: g  reason: collision with root package name */
        private ThreadPoolExecutor f4043g;

        /* renamed from: h  reason: collision with root package name */
        e.i f4044h;

        /* renamed from: i  reason: collision with root package name */
        private ContentObserver f4045i;

        /* renamed from: j  reason: collision with root package name */
        private Runnable f4046j;

        b(Context context, z1.e eVar, a aVar) {
            b2.e.h(context, "Context cannot be null");
            b2.e.h(eVar, "FontRequest cannot be null");
            this.f4037a = context.getApplicationContext();
            this.f4038b = eVar;
            this.f4039c = aVar;
        }

        private void b() {
            synchronized (this.f4040d) {
                try {
                    this.f4044h = null;
                    ContentObserver contentObserver = this.f4045i;
                    if (contentObserver != null) {
                        this.f4039c.c(this.f4037a, contentObserver);
                        this.f4045i = null;
                    }
                    Handler handler = this.f4041e;
                    if (handler != null) {
                        handler.removeCallbacks(this.f4046j);
                    }
                    this.f4041e = null;
                    ThreadPoolExecutor threadPoolExecutor = this.f4043g;
                    if (threadPoolExecutor != null) {
                        threadPoolExecutor.shutdown();
                    }
                    this.f4042f = null;
                    this.f4043g = null;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        private g.b e() {
            try {
                g.a b10 = this.f4039c.b(this.f4037a, this.f4038b);
                if (b10.e() == 0) {
                    g.b[] c10 = b10.c();
                    if (c10 != null && c10.length != 0) {
                        return c10[0];
                    }
                    throw new RuntimeException("fetchFonts failed (empty result)");
                }
                throw new RuntimeException("fetchFonts failed (" + b10.e() + ")");
            } catch (PackageManager.NameNotFoundException e10) {
                throw new RuntimeException("provider not found", e10);
            }
        }

        @Override // androidx.emoji2.text.e.h
        public void a(e.i iVar) {
            b2.e.h(iVar, "LoaderCallback cannot be null");
            synchronized (this.f4040d) {
                this.f4044h = iVar;
            }
            d();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void c() {
            synchronized (this.f4040d) {
                try {
                    if (this.f4044h == null) {
                        return;
                    }
                    try {
                        g.b e10 = e();
                        int b10 = e10.b();
                        if (b10 == 2) {
                            synchronized (this.f4040d) {
                            }
                        }
                        if (b10 == 0) {
                            w1.i.a("EmojiCompat.FontRequestEmojiCompatConfig.buildTypeface");
                            Typeface a10 = this.f4039c.a(this.f4037a, e10);
                            ByteBuffer f10 = s.f(this.f4037a, null, e10.e());
                            if (f10 != null && a10 != null) {
                                m b11 = m.b(a10, f10);
                                w1.i.b();
                                synchronized (this.f4040d) {
                                    e.i iVar = this.f4044h;
                                    if (iVar != null) {
                                        iVar.b(b11);
                                    }
                                }
                                b();
                                return;
                            }
                            throw new RuntimeException("Unable to open file.");
                        }
                        throw new RuntimeException("fetchFonts result is not OK. (" + b10 + ")");
                    } catch (Throwable th2) {
                        synchronized (this.f4040d) {
                            try {
                                e.i iVar2 = this.f4044h;
                                if (iVar2 != null) {
                                    iVar2.a(th2);
                                }
                                b();
                            } finally {
                            }
                        }
                    }
                } finally {
                }
            }
        }

        void d() {
            synchronized (this.f4040d) {
                try {
                    if (this.f4044h == null) {
                        return;
                    }
                    if (this.f4042f == null) {
                        ThreadPoolExecutor b10 = androidx.emoji2.text.b.b("emojiCompat");
                        this.f4043g = b10;
                        this.f4042f = b10;
                    }
                    this.f4042f.execute(new Runnable() { // from class: androidx.emoji2.text.k
                        @Override // java.lang.Runnable
                        public final void run() {
                            j.b.this.c();
                        }
                    });
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public void f(Executor executor) {
            synchronized (this.f4040d) {
                this.f4042f = executor;
            }
        }
    }

    public j(Context context, z1.e eVar) {
        super(new b(context, eVar, f4036k));
    }

    public j c(Executor executor) {
        ((b) a()).f(executor);
        return this;
    }
}
