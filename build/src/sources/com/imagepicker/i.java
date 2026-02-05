package com.imagepicker;

import android.content.Context;
import android.graphics.Bitmap;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.util.Log;
import java.io.FileInputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i extends f {

    /* renamed from: d  reason: collision with root package name */
    private int f17159d;

    /* renamed from: e  reason: collision with root package name */
    private int f17160e;

    public i(Uri uri, Context context) {
        MediaMetadataRetriever mediaMetadataRetriever = new MediaMetadataRetriever();
        mediaMetadataRetriever.setDataSource(context, uri);
        Bitmap b10 = b(uri, context, mediaMetadataRetriever);
        String extractMetadata = mediaMetadataRetriever.extractMetadata(9);
        String extractMetadata2 = mediaMetadataRetriever.extractMetadata(20);
        String extractMetadata3 = mediaMetadataRetriever.extractMetadata(5);
        if (extractMetadata != null) {
            this.f17159d = Math.round(Float.parseFloat(extractMetadata)) / 1000;
        }
        if (extractMetadata2 != null) {
            this.f17160e = Integer.parseInt(extractMetadata2);
        }
        if (extractMetadata3 != null) {
            this.f17135a = a(extractMetadata3.substring(0, extractMetadata3.indexOf(".")).replace("T", " "), "yyyyMMdd HHmmss");
        }
        if (b10 != null) {
            this.f17137c = b10.getWidth();
            this.f17136b = b10.getHeight();
        }
        try {
            mediaMetadataRetriever.release();
        } catch (IOException e10) {
            Log.e("RNIP", "Could not release metadata retriever: " + e10.getMessage());
        }
    }

    private Bitmap b(Uri uri, Context context, MediaMetadataRetriever mediaMetadataRetriever) {
        try {
            mediaMetadataRetriever.setDataSource(new FileInputStream(context.getContentResolver().openFileDescriptor(uri, "r").getFileDescriptor()).getFD());
            return mediaMetadataRetriever.getFrameAtTime();
        } catch (IOException | RuntimeException e10) {
            Log.e("RNIP", "Could not retrieve width and height from video: " + e10.getMessage());
            return null;
        }
    }

    public int c() {
        return this.f17160e;
    }

    public String d() {
        return this.f17135a;
    }

    public int e() {
        return this.f17159d;
    }

    public int f() {
        return this.f17136b;
    }

    public int g() {
        return this.f17137c;
    }
}
