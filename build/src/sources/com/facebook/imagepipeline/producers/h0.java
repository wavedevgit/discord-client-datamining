package com.facebook.imagepipeline.producers;

import android.content.ContentResolver;
import android.database.Cursor;
import android.graphics.Rect;
import android.media.ExifInterface;
import android.net.Uri;
import android.provider.MediaStore;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h0 extends j0 implements m1 {

    /* renamed from: d  reason: collision with root package name */
    private static final Class f10667d = h0.class;

    /* renamed from: e  reason: collision with root package name */
    private static final String[] f10668e = {"_id", "_data"};

    /* renamed from: f  reason: collision with root package name */
    private static final String[] f10669f = {"_data"};

    /* renamed from: g  reason: collision with root package name */
    private static final Rect f10670g = new Rect(0, 0, IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, 384);

    /* renamed from: h  reason: collision with root package name */
    private static final Rect f10671h = new Rect(0, 0, 96, 96);

    /* renamed from: c  reason: collision with root package name */
    private final ContentResolver f10672c;

    public h0(Executor executor, r8.i iVar, ContentResolver contentResolver) {
        super(executor, iVar);
        this.f10672c = contentResolver;
    }

    private sa.k g(Uri uri, ResizeOptions resizeOptions) {
        Cursor query;
        sa.k j10;
        if (resizeOptions == null || (query = this.f10672c.query(uri, f10668e, null, null, null)) == null) {
            return null;
        }
        try {
            if (query.moveToFirst() && (j10 = j(resizeOptions, query.getLong(query.getColumnIndex("_id")))) != null) {
                int columnIndex = query.getColumnIndex("_data");
                if (columnIndex >= 0) {
                    j10.D1(i(query.getString(columnIndex)));
                }
                query.close();
                return j10;
            }
            query.close();
            return null;
        } catch (Throwable th2) {
            query.close();
            throw th2;
        }
    }

    private static int h(String str) {
        if (str == null) {
            return -1;
        }
        return (int) new File(str).length();
    }

    private static int i(String str) {
        if (str != null) {
            try {
                return cb.g.a(new ExifInterface(str).getAttributeInt("Orientation", 1));
            } catch (IOException e10) {
                p8.a.l(f10667d, e10, "Unable to retrieve thumbnail rotation for %s", str);
                return 0;
            }
        }
        return 0;
    }

    private sa.k j(ResizeOptions resizeOptions, long j10) {
        Cursor queryMiniThumbnail;
        int columnIndex;
        int k10 = k(resizeOptions);
        if (k10 == 0 || (queryMiniThumbnail = MediaStore.Images.Thumbnails.queryMiniThumbnail(this.f10672c, j10, k10, f10669f)) == null) {
            return null;
        }
        try {
            if (queryMiniThumbnail.moveToFirst() && (columnIndex = queryMiniThumbnail.getColumnIndex("_data")) >= 0) {
                String str = (String) o8.j.g(queryMiniThumbnail.getString(columnIndex));
                if (new File(str).exists()) {
                    return e(new FileInputStream(str), h(str));
                }
            }
            return null;
        } finally {
            queryMiniThumbnail.close();
        }
    }

    private static int k(ResizeOptions resizeOptions) {
        Rect rect = f10671h;
        if (n1.b(rect.width(), rect.height(), resizeOptions)) {
            return 3;
        }
        Rect rect2 = f10670g;
        if (n1.b(rect2.width(), rect2.height(), resizeOptions)) {
            return 1;
        }
        return 0;
    }

    @Override // com.facebook.imagepipeline.producers.m1
    public boolean a(ResizeOptions resizeOptions) {
        Rect rect = f10670g;
        return n1.b(rect.width(), rect.height(), resizeOptions);
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected sa.k d(ImageRequest imageRequest) {
        Uri sourceUri = imageRequest.getSourceUri();
        if (w8.f.k(sourceUri)) {
            return g(sourceUri, imageRequest.getResizeOptions());
        }
        return null;
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected String f() {
        return "LocalContentUriThumbnailFetchProducer";
    }
}
