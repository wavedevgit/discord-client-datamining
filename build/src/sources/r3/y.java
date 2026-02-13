package r3;

import android.content.Context;
import android.util.Log;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.channels.Channels;
import java.nio.channels.FileChannel;
import java.nio.channels.ReadableByteChannel;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y implements x3.h, g {

    /* renamed from: d  reason: collision with root package name */
    private final Context f46678d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46679e;

    /* renamed from: i  reason: collision with root package name */
    private final File f46680i;

    /* renamed from: o  reason: collision with root package name */
    private final Callable f46681o;

    /* renamed from: p  reason: collision with root package name */
    private final int f46682p;

    /* renamed from: q  reason: collision with root package name */
    private final x3.h f46683q;

    /* renamed from: r  reason: collision with root package name */
    private f f46684r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f46685s;

    public y(Context context, String str, File file, Callable callable, int i10, x3.h delegate) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f46678d = context;
        this.f46679e = str;
        this.f46680i = file;
        this.f46681o = callable;
        this.f46682p = i10;
        this.f46683q = delegate;
    }

    private final void a(File file, boolean z10) {
        ReadableByteChannel newChannel;
        if (this.f46679e != null) {
            newChannel = Channels.newChannel(this.f46678d.getAssets().open(this.f46679e));
            Intrinsics.checkNotNullExpressionValue(newChannel, "newChannel(context.assets.open(copyFromAssetPath))");
        } else if (this.f46680i != null) {
            newChannel = new FileInputStream(this.f46680i).getChannel();
            Intrinsics.checkNotNullExpressionValue(newChannel, "FileInputStream(copyFromFile).channel");
        } else {
            Callable callable = this.f46681o;
            if (callable != null) {
                try {
                    newChannel = Channels.newChannel((InputStream) callable.call());
                    Intrinsics.checkNotNullExpressionValue(newChannel, "newChannel(inputStream)");
                } catch (Exception e10) {
                    throw new IOException("inputStreamCallable exception on call", e10);
                }
            } else {
                throw new IllegalStateException("copyFromAssetPath, copyFromFile and copyFromInputStream are all null!");
            }
        }
        File intermediateFile = File.createTempFile("room-copy-helper", ".tmp", this.f46678d.getCacheDir());
        intermediateFile.deleteOnExit();
        FileChannel output = new FileOutputStream(intermediateFile).getChannel();
        Intrinsics.checkNotNullExpressionValue(output, "output");
        t3.c.a(newChannel, output);
        File parentFile = file.getParentFile();
        if (parentFile != null && !parentFile.exists() && !parentFile.mkdirs()) {
            throw new IOException("Failed to create directories for " + file.getAbsolutePath());
        }
        Intrinsics.checkNotNullExpressionValue(intermediateFile, "intermediateFile");
        h(intermediateFile, z10);
        if (intermediateFile.renameTo(file)) {
            return;
        }
        throw new IOException("Failed to move intermediate file (" + intermediateFile.getAbsolutePath() + ") to destination (" + file.getAbsolutePath() + ").");
    }

    private final void h(File file, boolean z10) {
        f fVar = this.f46684r;
        if (fVar == null) {
            Intrinsics.throwUninitializedPropertyAccessException("databaseConfiguration");
            fVar = null;
        }
        fVar.getClass();
    }

    private final void m(boolean z10) {
        String databaseName = getDatabaseName();
        if (databaseName != null) {
            File databaseFile = this.f46678d.getDatabasePath(databaseName);
            f fVar = this.f46684r;
            f fVar2 = null;
            if (fVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("databaseConfiguration");
                fVar = null;
            }
            boolean z11 = fVar.f46557s;
            File filesDir = this.f46678d.getFilesDir();
            Intrinsics.checkNotNullExpressionValue(filesDir, "context.filesDir");
            z3.a aVar = new z3.a(databaseName, filesDir, z11);
            try {
                z3.a.c(aVar, false, 1, null);
                if (!databaseFile.exists()) {
                    try {
                        Intrinsics.checkNotNullExpressionValue(databaseFile, "databaseFile");
                        a(databaseFile, z10);
                        aVar.d();
                        return;
                    } catch (IOException e10) {
                        throw new RuntimeException("Unable to copy database file.", e10);
                    }
                }
                try {
                    Intrinsics.checkNotNullExpressionValue(databaseFile, "databaseFile");
                    int c10 = t3.b.c(databaseFile);
                    if (c10 == this.f46682p) {
                        aVar.d();
                        return;
                    }
                    f fVar3 = this.f46684r;
                    if (fVar3 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("databaseConfiguration");
                    } else {
                        fVar2 = fVar3;
                    }
                    if (fVar2.a(c10, this.f46682p)) {
                        aVar.d();
                        return;
                    }
                    if (this.f46678d.deleteDatabase(databaseName)) {
                        try {
                            a(databaseFile, z10);
                        } catch (IOException e11) {
                            Log.w("ROOM", "Unable to copy database file.", e11);
                        }
                    } else {
                        Log.w("ROOM", "Failed to delete database file (" + databaseName + ") for a copy destructive migration.");
                    }
                    aVar.d();
                    return;
                } catch (IOException e12) {
                    Log.w("ROOM", "Unable to read database version.", e12);
                    aVar.d();
                    return;
                }
            } catch (Throwable th2) {
                aVar.d();
                throw th2;
            }
            aVar.d();
            throw th2;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        getDelegate().close();
        this.f46685s = false;
    }

    @Override // x3.h
    public String getDatabaseName() {
        return getDelegate().getDatabaseName();
    }

    @Override // r3.g
    public x3.h getDelegate() {
        return this.f46683q;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        if (!this.f46685s) {
            m(true);
            this.f46685s = true;
        }
        return getDelegate().getWritableDatabase();
    }

    public final void i(f databaseConfiguration) {
        Intrinsics.checkNotNullParameter(databaseConfiguration, "databaseConfiguration");
        this.f46684r = databaseConfiguration;
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        getDelegate().setWriteAheadLoggingEnabled(z10);
    }
}
