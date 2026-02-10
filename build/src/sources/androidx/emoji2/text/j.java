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
    private static final a f4143k = new a();

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
        private final Context f4144a;

        /* renamed from: b  reason: collision with root package name */
        private final z1.e f4145b;

        /* renamed from: c  reason: collision with root package name */
        private final a f4146c;

        /* renamed from: d  reason: collision with root package name */
        private final Object f4147d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private Handler f4148e;

        /* renamed from: f  reason: collision with root package name */
        private Executor f4149f;

        /* renamed from: g  reason: collision with root package name */
        private ThreadPoolExecutor f4150g;

        /* renamed from: h  reason: collision with root package name */
        e.i f4151h;

        /* renamed from: i  reason: collision with root package name */
        private ContentObserver f4152i;

        /* renamed from: j  reason: collision with root package name */
        private Runnable f4153j;

        b(Context context, z1.e eVar, a aVar) {
            b2.e.h(context, "Context cannot be null");
            b2.e.h(eVar, "FontRequest cannot be null");
            this.f4144a = context.getApplicationContext();
            this.f4145b = eVar;
            this.f4146c = aVar;
        }

        private void b() {
            synchronized (this.f4147d) {
                try {
                    this.f4151h = null;
                    ContentObserver contentObserver = this.f4152i;
                    if (contentObserver != null) {
                        this.f4146c.c(this.f4144a, contentObserver);
                        this.f4152i = null;
                    }
                    Handler handler = this.f4148e;
                    if (handler != null) {
                        handler.removeCallbacks(this.f4153j);
                    }
                    this.f4148e = null;
                    ThreadPoolExecutor threadPoolExecutor = this.f4150g;
                    if (threadPoolExecutor != null) {
                        threadPoolExecutor.shutdown();
                    }
                    this.f4149f = null;
                    this.f4150g = null;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        private g.b e() {
            try {
                g.a b10 = this.f4146c.b(this.f4144a, this.f4145b);
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
            synchronized (this.f4147d) {
                this.f4151h = iVar;
            }
            d();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void c() {
            synchronized (this.f4147d) {
                try {
                    if (this.f4151h == null) {
                        return;
                    }
                    try {
                        g.b e10 = e();
                        int b10 = e10.b();
                        if (b10 == 2) {
                            synchronized (this.f4147d) {
                            }
                        }
                        if (b10 == 0) {
                            w1.i.a("EmojiCompat.FontRequestEmojiCompatConfig.buildTypeface");
                            Typeface a10 = this.f4146c.a(this.f4144a, e10);
                            ByteBuffer f10 = s.f(this.f4144a, null, e10.e());
                            if (f10 != null && a10 != null) {
                                m b11 = m.b(a10, f10);
                                w1.i.b();
                                synchronized (this.f4147d) {
                                    e.i iVar = this.f4151h;
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
                        synchronized (this.f4147d) {
                            try {
                                e.i iVar2 = this.f4151h;
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
            synchronized (this.f4147d) {
                try {
                    if (this.f4151h == null) {
                        return;
                    }
                    if (this.f4149f == null) {
                        ThreadPoolExecutor b10 = androidx.emoji2.text.b.b("emojiCompat");
                        this.f4150g = b10;
                        this.f4149f = b10;
                    }
                    this.f4149f.execute(new Runnable() { // from class: androidx.emoji2.text.k
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
            synchronized (this.f4147d) {
                this.f4149f = executor;
            }
        }
    }

    public j(Context context, z1.e eVar) {
        super(new b(context, eVar, f4143k));
    }

    public j c(Executor executor) {
        ((b) a()).f(executor);
        return this;
    }
}
