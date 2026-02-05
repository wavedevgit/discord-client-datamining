package com.facebook.imagepipeline.producers;

import android.content.ContentResolver;
import android.content.res.AssetFileDescriptor;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import android.provider.ContactsContract;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f10755d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final String[] f10756e = {"_id", "_data"};

    /* renamed from: c  reason: collision with root package name */
    private final ContentResolver f10757c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g0(Executor executor, r8.i pooledByteBufferFactory, ContentResolver contentResolver) {
        super(executor, pooledByteBufferFactory);
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(pooledByteBufferFactory, "pooledByteBufferFactory");
        Intrinsics.checkNotNullParameter(contentResolver, "contentResolver");
        this.f10757c = contentResolver;
    }

    private final sa.k g(Uri uri) {
        try {
            ParcelFileDescriptor openFileDescriptor = this.f10757c.openFileDescriptor(uri, "r");
            if (openFileDescriptor != null) {
                sa.k e10 = e(new FileInputStream(openFileDescriptor.getFileDescriptor()), (int) openFileDescriptor.getStatSize());
                Intrinsics.checkNotNullExpressionValue(e10, "getEncodedImage(...)");
                openFileDescriptor.close();
                return e10;
            }
            throw new IllegalStateException("Required value was null.");
        } catch (FileNotFoundException unused) {
            return null;
        }
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected sa.k d(ImageRequest imageRequest) {
        sa.k g10;
        InputStream createInputStream;
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        Uri sourceUri = imageRequest.getSourceUri();
        Intrinsics.checkNotNullExpressionValue(sourceUri, "getSourceUri(...)");
        if (w8.f.l(sourceUri)) {
            String uri = sourceUri.toString();
            Intrinsics.checkNotNullExpressionValue(uri, "toString(...)");
            if (StringsKt.z(uri, "/photo", false, 2, null)) {
                createInputStream = this.f10757c.openInputStream(sourceUri);
            } else {
                String uri2 = sourceUri.toString();
                Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
                if (StringsKt.z(uri2, "/display_photo", false, 2, null)) {
                    try {
                        AssetFileDescriptor openAssetFileDescriptor = this.f10757c.openAssetFileDescriptor(sourceUri, "r");
                        if (openAssetFileDescriptor != null) {
                            createInputStream = openAssetFileDescriptor.createInputStream();
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } catch (IOException unused) {
                        throw new IOException("Contact photo does not exist: " + sourceUri);
                    }
                } else {
                    InputStream openContactPhotoInputStream = ContactsContract.Contacts.openContactPhotoInputStream(this.f10757c, sourceUri);
                    if (openContactPhotoInputStream != null) {
                        createInputStream = openContactPhotoInputStream;
                    } else {
                        throw new IOException("Contact photo does not exist: " + sourceUri);
                    }
                }
            }
            if (createInputStream != null) {
                return e(createInputStream, -1);
            }
            throw new IllegalStateException("Required value was null.");
        } else if (w8.f.k(sourceUri) && (g10 = g(sourceUri)) != null) {
            return g10;
        } else {
            InputStream openInputStream = this.f10757c.openInputStream(sourceUri);
            if (openInputStream != null) {
                return e(openInputStream, -1);
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected String f() {
        return "LocalContentUriFetchProducer";
    }
}
