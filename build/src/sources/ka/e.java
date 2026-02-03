package ka;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements s8.c {

    /* renamed from: a  reason: collision with root package name */
    private static e f32223a;

    private e() {
    }

    public static e a() {
        if (f32223a == null) {
            f32223a = new e();
        }
        return f32223a;
    }

    @Override // s8.c
    /* renamed from: b */
    public void release(Bitmap bitmap) {
        bitmap.recycle();
    }
}
