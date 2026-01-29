package androidx.profileinstaller;

import android.content.res.AssetManager;
import android.os.Build;
import androidx.profileinstaller.f;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.channels.FileChannel;
import java.nio.channels.FileLock;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final AssetManager f4638a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f4639b;

    /* renamed from: c  reason: collision with root package name */
    private final f.c f4640c;

    /* renamed from: e  reason: collision with root package name */
    private final File f4642e;

    /* renamed from: f  reason: collision with root package name */
    private final String f4643f;

    /* renamed from: g  reason: collision with root package name */
    private final String f4644g;

    /* renamed from: h  reason: collision with root package name */
    private final String f4645h;

    /* renamed from: j  reason: collision with root package name */
    private c[] f4647j;

    /* renamed from: k  reason: collision with root package name */
    private byte[] f4648k;

    /* renamed from: i  reason: collision with root package name */
    private boolean f4646i = false;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f4641d = d();

    public b(AssetManager assetManager, Executor executor, f.c cVar, String str, String str2, String str3, File file) {
        this.f4638a = assetManager;
        this.f4639b = executor;
        this.f4640c = cVar;
        this.f4643f = str;
        this.f4644g = str2;
        this.f4645h = str3;
        this.f4642e = file;
    }

    private b b(c[] cVarArr, byte[] bArr) {
        InputStream g10;
        try {
            g10 = g(this.f4638a, this.f4645h);
        } catch (FileNotFoundException e10) {
            this.f4640c.a(9, e10);
        } catch (IOException e11) {
            this.f4640c.a(7, e11);
        } catch (IllegalStateException e12) {
            this.f4647j = null;
            this.f4640c.a(8, e12);
        }
        if (g10 != null) {
            try {
                this.f4647j = g.r(g10, g.p(g10, g.f4668b), bArr, cVarArr);
                g10.close();
                return this;
            } catch (Throwable th2) {
                try {
                    g10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }
        if (g10 != null) {
            g10.close();
        }
        return null;
    }

    private void c() {
        if (this.f4646i) {
            return;
        }
        throw new IllegalStateException("This device doesn't support aot. Did you call deviceSupportsAotProfile()?");
    }

    private static byte[] d() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 31) {
            return i.f4680a;
        }
        switch (i10) {
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                return i.f4684e;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                return i.f4683d;
            case 27:
                return i.f4682c;
            case 28:
            case 29:
            case 30:
                return i.f4681b;
            default:
                return null;
        }
    }

    private InputStream f(AssetManager assetManager) {
        try {
            return g(assetManager, this.f4644g);
        } catch (FileNotFoundException e10) {
            this.f4640c.a(6, e10);
            return null;
        } catch (IOException e11) {
            this.f4640c.a(7, e11);
            return null;
        }
    }

    private InputStream g(AssetManager assetManager, String str) {
        try {
            return assetManager.openFd(str).createInputStream();
        } catch (FileNotFoundException e10) {
            String message = e10.getMessage();
            if (message != null && message.contains("compressed")) {
                this.f4640c.b(5, null);
            }
            return null;
        }
    }

    private c[] i(InputStream inputStream) {
        try {
            try {
                try {
                    c[] x10 = g.x(inputStream, g.p(inputStream, g.f4667a), this.f4643f);
                    try {
                        inputStream.close();
                        return x10;
                    } catch (IOException e10) {
                        this.f4640c.a(7, e10);
                        return x10;
                    }
                } catch (IllegalStateException e11) {
                    this.f4640c.a(8, e11);
                    try {
                        inputStream.close();
                    } catch (IOException e12) {
                        this.f4640c.a(7, e12);
                    }
                    return null;
                }
            } catch (IOException e13) {
                this.f4640c.a(7, e13);
                inputStream.close();
                return null;
            }
        } catch (Throwable th2) {
            try {
                inputStream.close();
            } catch (IOException e14) {
                this.f4640c.a(7, e14);
            }
            throw th2;
        }
    }

    private static boolean j() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 31 || i10 == 24 || i10 == 25) {
            return true;
        }
        return false;
    }

    private void k(final int i10, final Object obj) {
        this.f4639b.execute(new Runnable() { // from class: p3.a
            @Override // java.lang.Runnable
            public final void run() {
                androidx.profileinstaller.b.this.f4640c.a(i10, obj);
            }
        });
    }

    public boolean e() {
        if (this.f4641d == null) {
            k(3, Integer.valueOf(Build.VERSION.SDK_INT));
            return false;
        }
        if (this.f4642e.exists()) {
            if (!this.f4642e.canWrite()) {
                k(4, null);
                return false;
            }
        } else {
            try {
                if (!this.f4642e.createNewFile()) {
                    k(4, null);
                    return false;
                }
            } catch (IOException unused) {
                k(4, null);
                return false;
            }
        }
        this.f4646i = true;
        return true;
    }

    public b h() {
        b b10;
        c();
        if (this.f4641d != null) {
            InputStream f10 = f(this.f4638a);
            if (f10 != null) {
                this.f4647j = i(f10);
            }
            c[] cVarArr = this.f4647j;
            if (cVarArr != null && j() && (b10 = b(cVarArr, this.f4641d)) != null) {
                return b10;
            }
        }
        return this;
    }

    public b l() {
        ByteArrayOutputStream byteArrayOutputStream;
        c[] cVarArr = this.f4647j;
        byte[] bArr = this.f4641d;
        if (cVarArr != null && bArr != null) {
            c();
            try {
                byteArrayOutputStream = new ByteArrayOutputStream();
                try {
                    g.F(byteArrayOutputStream, bArr);
                } catch (Throwable th2) {
                    try {
                        byteArrayOutputStream.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                    throw th2;
                }
            } catch (IOException e10) {
                this.f4640c.a(7, e10);
            } catch (IllegalStateException e11) {
                this.f4640c.a(8, e11);
            }
            if (!g.C(byteArrayOutputStream, bArr, cVarArr)) {
                this.f4640c.a(5, null);
                this.f4647j = null;
                byteArrayOutputStream.close();
                return this;
            }
            this.f4648k = byteArrayOutputStream.toByteArray();
            byteArrayOutputStream.close();
            this.f4647j = null;
        }
        return this;
    }

    /* JADX WARN: Type inference failed for: r2v0, types: [byte[], androidx.profileinstaller.c[]] */
    public boolean m() {
        byte[] bArr = this.f4648k;
        if (bArr == null) {
            return false;
        }
        c();
        try {
            try {
                ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bArr);
                try {
                    FileOutputStream fileOutputStream = new FileOutputStream(this.f4642e);
                    FileChannel channel = fileOutputStream.getChannel();
                    try {
                        FileLock tryLock = channel.tryLock();
                        d.l(byteArrayInputStream, fileOutputStream, tryLock);
                        k(1, null);
                        if (tryLock != null) {
                            tryLock.close();
                        }
                        channel.close();
                        fileOutputStream.close();
                        byteArrayInputStream.close();
                        return true;
                    } catch (Throwable th2) {
                        if (channel != null) {
                            try {
                                channel.close();
                            } catch (Throwable th3) {
                                th2.addSuppressed(th3);
                            }
                        }
                        throw th2;
                    }
                } catch (Throwable th4) {
                    try {
                        byteArrayInputStream.close();
                    } catch (Throwable th5) {
                        th4.addSuppressed(th5);
                    }
                    throw th4;
                }
            } catch (FileNotFoundException e10) {
                k(6, e10);
                return false;
            } catch (IOException e11) {
                k(7, e11);
                return false;
            }
        } finally {
            this.f4648k = null;
            this.f4647j = null;
        }
    }
}
