package la;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements t8.c {

    /* renamed from: a  reason: collision with root package name */
    private static e f35696a;

    private e() {
    }

    public static e a() {
        if (f35696a == null) {
            f35696a = new e();
        }
        return f35696a;
    }

    @Override // t8.c
    /* renamed from: b */
    public void release(Bitmap bitmap) {
        bitmap.recycle();
    }
}
