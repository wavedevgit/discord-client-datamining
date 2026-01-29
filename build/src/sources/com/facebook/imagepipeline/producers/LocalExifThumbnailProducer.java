package com.facebook.imagepipeline.producers;

import android.content.ContentResolver;
import android.content.res.AssetFileDescriptor;
import android.media.ExifInterface;
import android.net.Uri;
import android.util.Pair;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.File;
import java.io.FileDescriptor;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class LocalExifThumbnailProducer implements m1 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f11681a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f11682b;

    /* renamed from: c  reason: collision with root package name */
    private final ContentResolver f11683c;

    /* JADX INFO: Access modifiers changed from: private */
    @com.facebook.soloader.g
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class Api24Utils {
        ExifInterface a(FileDescriptor fileDescriptor) {
            return new ExifInterface(fileDescriptor);
        }

        private Api24Utils() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ ImageRequest f11685q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, ImageRequest imageRequest) {
            super(consumer, y0Var, producerContext, str);
            this.f11685q = imageRequest;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: j */
        public void b(sa.k kVar) {
            sa.k.l(kVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1
        /* renamed from: k */
        public Map i(sa.k kVar) {
            boolean z10;
            if (kVar != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            return o8.f.of("createdThumbnail", Boolean.toString(z10));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: l */
        public sa.k c() {
            ExifInterface g10 = LocalExifThumbnailProducer.this.g(this.f11685q.getSourceUri());
            if (g10 != null && g10.hasThumbnail()) {
                return LocalExifThumbnailProducer.this.e(LocalExifThumbnailProducer.this.f11682b.d((byte[]) o8.j.g(g10.getThumbnail())), g10);
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f11687a;

        b(e1 e1Var) {
            this.f11687a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11687a.a();
        }
    }

    public LocalExifThumbnailProducer(Executor executor, r8.i iVar, ContentResolver contentResolver) {
        this.f11681a = executor;
        this.f11682b = iVar;
        this.f11683c = contentResolver;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public sa.k e(r8.h hVar, ExifInterface exifInterface) {
        int i10;
        Pair d10 = cb.d.d(new r8.j(hVar));
        int h10 = h(exifInterface);
        int i11 = -1;
        if (d10 != null) {
            i10 = ((Integer) d10.first).intValue();
        } else {
            i10 = -1;
        }
        if (d10 != null) {
            i11 = ((Integer) d10.second).intValue();
        }
        CloseableReference J0 = CloseableReference.J0(hVar);
        try {
            sa.k kVar = new sa.k(J0);
            CloseableReference.N(J0);
            kVar.B1(fa.b.f24868b);
            kVar.E1(h10);
            kVar.Y1(i10);
            kVar.A1(i11);
            return kVar;
        } catch (Throwable th2) {
            CloseableReference.N(J0);
            throw th2;
        }
    }

    private int h(ExifInterface exifInterface) {
        return cb.g.a(Integer.parseInt((String) o8.j.g(exifInterface.getAttribute("Orientation"))));
    }

    @Override // com.facebook.imagepipeline.producers.m1
    public boolean a(ResizeOptions resizeOptions) {
        return n1.b(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, resizeOptions);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 F = producerContext.F();
        ImageRequest V = producerContext.V();
        producerContext.n("local", "exif");
        a aVar = new a(consumer, F, producerContext, "LocalExifThumbnailProducer", V);
        producerContext.h(new b(aVar));
        this.f11681a.execute(aVar);
    }

    boolean f(String str) {
        if (str == null) {
            return false;
        }
        File file = new File(str);
        if (!file.exists() || !file.canRead()) {
            return false;
        }
        return true;
    }

    ExifInterface g(Uri uri) {
        String e10 = w8.f.e(this.f11683c, uri);
        if (e10 == null) {
            return null;
        }
        try {
        } catch (IOException unused) {
        } catch (StackOverflowError unused2) {
            p8.a.i(LocalExifThumbnailProducer.class, "StackOverflowError in ExifInterface constructor");
        }
        if (f(e10)) {
            return new ExifInterface(e10);
        }
        AssetFileDescriptor a10 = w8.f.a(this.f11683c, uri);
        if (a10 != null) {
            ExifInterface a11 = new Api24Utils().a(a10.getFileDescriptor());
            a10.close();
            return a11;
        }
        return null;
    }
}
