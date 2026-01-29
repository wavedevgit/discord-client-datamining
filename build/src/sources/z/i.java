package z;

import android.graphics.Bitmap;
import android.os.Build;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class i implements j0.y {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static boolean a(Bitmap bitmap) {
            return bitmap.hasGainmap();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static b c(j0.z zVar, int i10) {
            return new z.a(zVar, i10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract j0.z b();
    }

    private static int b(Bitmap bitmap) {
        if (Build.VERSION.SDK_INT >= 34 && a.a(bitmap)) {
            return 4101;
        }
        return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }

    @Override // j0.y
    /* renamed from: a */
    public j0.z apply(b bVar) {
        j0.z b10 = bVar.b();
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ((Bitmap) b10.c()).compress(Bitmap.CompressFormat.JPEG, bVar.a(), byteArrayOutputStream);
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        b0.f d10 = b10.d();
        Objects.requireNonNull(d10);
        return j0.z.m(byteArray, d10, b((Bitmap) b10.c()), b10.h(), b10.b(), b10.f(), b10.g(), b10.a());
    }
}
