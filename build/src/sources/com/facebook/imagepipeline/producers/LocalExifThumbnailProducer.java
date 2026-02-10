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
    private final Executor f10702a;

    /* renamed from: b  reason: collision with root package name */
    private final s8.i f10703b;

    /* renamed from: c  reason: collision with root package name */
    private final ContentResolver f10704c;

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
        final /* synthetic */ ImageRequest f10706q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, ImageRequest imageRequest) {
            super(consumer, y0Var, producerContext, str);
            this.f10706q = imageRequest;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // n8.h
        /* renamed from: j */
        public void b(ta.k kVar) {
            ta.k.k(kVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1
        /* renamed from: k */
        public Map i(ta.k kVar) {
            boolean z10;
            if (kVar != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            return p8.f.of("createdThumbnail", Boolean.toString(z10));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // n8.h
        /* renamed from: l */
        public ta.k c() {
            ExifInterface g10 = LocalExifThumbnailProducer.this.g(this.f10706q.getSourceUri());
            if (g10 != null && g10.hasThumbnail()) {
                return LocalExifThumbnailProducer.this.e(LocalExifThumbnailProducer.this.f10703b.d((byte[]) p8.j.g(g10.getThumbnail())), g10);
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f10708a;

        b(e1 e1Var) {
            this.f10708a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10708a.a();
        }
    }

    public LocalExifThumbnailProducer(Executor executor, s8.i iVar, ContentResolver contentResolver) {
        this.f10702a = executor;
        this.f10703b = iVar;
        this.f10704c = contentResolver;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ta.k e(s8.h hVar, ExifInterface exifInterface) {
        int i10;
        Pair d10 = db.d.d(new s8.j(hVar));
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
        CloseableReference H0 = CloseableReference.H0(hVar);
        try {
            ta.k kVar = new ta.k(H0);
            CloseableReference.z(H0);
            kVar.w1(ga.b.f24082b);
            kVar.z1(h10);
            kVar.W1(i10);
            kVar.u1(i11);
            return kVar;
        } catch (Throwable th2) {
            CloseableReference.z(H0);
            throw th2;
        }
    }

    private int h(ExifInterface exifInterface) {
        return db.g.a(Integer.parseInt((String) p8.j.g(exifInterface.getAttribute("Orientation"))));
    }

    @Override // com.facebook.imagepipeline.producers.m1
    public boolean a(ResizeOptions resizeOptions) {
        return n1.b(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, resizeOptions);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        producerContext.m("local", "exif");
        a aVar = new a(consumer, y10, producerContext, "LocalExifThumbnailProducer", I);
        producerContext.g(new b(aVar));
        this.f10702a.execute(aVar);
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
        String e10 = x8.f.e(this.f10704c, uri);
        if (e10 == null) {
            return null;
        }
        try {
        } catch (IOException unused) {
        } catch (StackOverflowError unused2) {
            q8.a.i(LocalExifThumbnailProducer.class, "StackOverflowError in ExifInterface constructor");
        }
        if (f(e10)) {
            return new ExifInterface(e10);
        }
        AssetFileDescriptor a10 = x8.f.a(this.f10704c, uri);
        if (a10 != null) {
            ExifInterface a11 = new Api24Utils().a(a10.getFileDescriptor());
            a10.close();
            return a11;
        }
        return null;
    }
}
