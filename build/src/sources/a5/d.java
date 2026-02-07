package a5;

import a5.h;
import android.content.ContentResolver;
import android.content.res.AssetFileDescriptor;
import android.graphics.Point;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import g5.m;
import h5.c;
import java.io.InputStream;
import java.util.List;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.MediaStreamTrack;
import qu.x;
import x4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements h {

    /* renamed from: a  reason: collision with root package name */
    private final Uri f390a;

    /* renamed from: b  reason: collision with root package name */
    private final m f391b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements h.a {
        private final boolean c(Uri uri) {
            return Intrinsics.areEqual(uri.getScheme(), "content");
        }

        @Override // a5.h.a
        /* renamed from: b */
        public h a(Uri uri, m mVar, v4.h hVar) {
            if (!c(uri)) {
                return null;
            }
            return new d(uri, mVar);
        }
    }

    public d(Uri uri, m mVar) {
        this.f390a = uri;
        this.f391b = mVar;
    }

    private final Bundle d() {
        c.a aVar;
        c.a aVar2;
        h5.c d10 = this.f391b.o().d();
        if (d10 instanceof c.a) {
            aVar = (c.a) d10;
        } else {
            aVar = null;
        }
        if (aVar == null) {
            return null;
        }
        int i10 = aVar.f25833a;
        h5.c c10 = this.f391b.o().c();
        if (c10 instanceof c.a) {
            aVar2 = (c.a) c10;
        } else {
            aVar2 = null;
        }
        if (aVar2 == null) {
            return null;
        }
        int i11 = aVar2.f25833a;
        Bundle bundle = new Bundle(1);
        bundle.putParcelable("android.content.extra.SIZE", new Point(i10, i11));
        return bundle;
    }

    @Override // a5.h
    public Object a(Continuation continuation) {
        ContentResolver contentResolver = this.f391b.g().getContentResolver();
        InputStream inputStream = null;
        if (b(this.f390a)) {
            AssetFileDescriptor openAssetFileDescriptor = contentResolver.openAssetFileDescriptor(this.f390a, "r");
            if (openAssetFileDescriptor != null) {
                inputStream = openAssetFileDescriptor.createInputStream();
            }
            if (inputStream == null) {
                throw new IllegalStateException(("Unable to find a contact photo associated with '" + this.f390a + "'.").toString());
            }
        } else if (Build.VERSION.SDK_INT >= 29 && c(this.f390a)) {
            AssetFileDescriptor openTypedAssetFile = contentResolver.openTypedAssetFile(this.f390a, "image/*", d(), null);
            if (openTypedAssetFile != null) {
                inputStream = openTypedAssetFile.createInputStream();
            }
            if (inputStream == null) {
                throw new IllegalStateException(("Unable to find a music thumbnail associated with '" + this.f390a + "'.").toString());
            }
        } else {
            inputStream = contentResolver.openInputStream(this.f390a);
            if (inputStream == null) {
                throw new IllegalStateException(("Unable to open '" + this.f390a + "'.").toString());
            }
        }
        return new l(u.f(x.d(x.k(inputStream)), this.f391b.g(), new x4.g(this.f390a)), contentResolver.getType(this.f390a), x4.h.f54521i);
    }

    public final boolean b(Uri uri) {
        if (Intrinsics.areEqual(uri.getAuthority(), "com.android.contacts") && Intrinsics.areEqual(uri.getLastPathSegment(), "display_photo")) {
            return true;
        }
        return false;
    }

    public final boolean c(Uri uri) {
        List<String> pathSegments;
        int size;
        if (!Intrinsics.areEqual(uri.getAuthority(), "media") || (size = (pathSegments = uri.getPathSegments()).size()) < 3 || !Intrinsics.areEqual(pathSegments.get(size - 3), MediaStreamTrack.AUDIO_TRACK_KIND) || !Intrinsics.areEqual(pathSegments.get(size - 2), "albums")) {
            return false;
        }
        return true;
    }
}
