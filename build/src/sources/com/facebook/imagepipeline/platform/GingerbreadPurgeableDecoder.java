package com.facebook.imagepipeline.platform;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.MemoryFile;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder;
import java.io.FileDescriptor;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Method;
import o8.d;
import o8.n;
import r8.h;
import r8.j;
import u8.a;
import x8.b;
import x8.c;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GingerbreadPurgeableDecoder extends DalvikPurgeableDecoder {

    /* renamed from: d  reason: collision with root package name */
    private static Method f10267d;

    /* renamed from: c  reason: collision with root package name */
    private final b f10268c = c.i();

    private static MemoryFile h(CloseableReference closeableReference, int i10, byte[] bArr) {
        int length;
        OutputStream outputStream;
        a aVar;
        j jVar;
        if (bArr == null) {
            length = 0;
        } else {
            length = bArr.length;
        }
        j jVar2 = null;
        OutputStream outputStream2 = null;
        MemoryFile memoryFile = new MemoryFile(null, length + i10);
        memoryFile.allowPurging(false);
        try {
            jVar = new j((h) closeableReference.C0());
            try {
                aVar = new a(jVar, i10);
            } catch (Throwable th2) {
                th = th2;
                outputStream = null;
                aVar = null;
            }
        } catch (Throwable th3) {
            th = th3;
            outputStream = null;
            aVar = null;
        }
        try {
            outputStream2 = memoryFile.getOutputStream();
            o8.a.a(aVar, outputStream2);
            if (bArr != null) {
                memoryFile.writeBytes(bArr, 0, i10, bArr.length);
            }
            CloseableReference.N(closeableReference);
            o8.b.b(jVar);
            o8.b.b(aVar);
            o8.b.a(outputStream2, true);
            return memoryFile;
        } catch (Throwable th4) {
            th = th4;
            outputStream = outputStream2;
            jVar2 = jVar;
            CloseableReference.N(closeableReference);
            o8.b.b(jVar2);
            o8.b.b(aVar);
            o8.b.a(outputStream, true);
            throw th;
        }
    }

    private Bitmap i(CloseableReference closeableReference, int i10, byte[] bArr, BitmapFactory.Options options) {
        MemoryFile h10;
        MemoryFile memoryFile = null;
        try {
            try {
                h10 = h(closeableReference, i10, bArr);
            } catch (IOException e10) {
                e = e10;
            }
        } catch (Throwable th2) {
            th = th2;
        }
        try {
            FileDescriptor k10 = k(h10);
            b bVar = this.f10268c;
            if (bVar != null) {
                Bitmap bitmap = (Bitmap) o8.j.h(bVar.b(k10, null, options), "BitmapFactory returned null");
                if (h10 != null) {
                    h10.close();
                }
                return bitmap;
            }
            throw new IllegalStateException("WebpBitmapFactory is null");
        } catch (IOException e11) {
            e = e11;
            memoryFile = h10;
            throw n.a(e);
        } catch (Throwable th3) {
            th = th3;
            memoryFile = h10;
            if (memoryFile != null) {
                memoryFile.close();
            }
            throw th;
        }
    }

    private synchronized Method j() {
        if (f10267d == null) {
            try {
                f10267d = MemoryFile.class.getDeclaredMethod("getFileDescriptor", null);
            } catch (Exception e10) {
                throw n.a(e10);
            }
        }
        return f10267d;
    }

    private FileDescriptor k(MemoryFile memoryFile) {
        try {
            return (FileDescriptor) o8.j.g(j().invoke(memoryFile, null));
        } catch (Exception e10) {
            throw n.a(e10);
        }
    }

    @Override // com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder
    protected Bitmap c(CloseableReference closeableReference, BitmapFactory.Options options) {
        return i(closeableReference, ((h) closeableReference.C0()).size(), null, options);
    }

    @Override // com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder
    protected Bitmap d(CloseableReference closeableReference, int i10, BitmapFactory.Options options) {
        byte[] bArr;
        if (DalvikPurgeableDecoder.e(closeableReference, i10)) {
            bArr = null;
        } else {
            bArr = DalvikPurgeableDecoder.f10255b;
        }
        return i(closeableReference, i10, bArr, options);
    }
}
