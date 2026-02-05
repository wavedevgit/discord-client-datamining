package nr;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final float f41960a;

    public b(float f10) {
        this.f41960a = f10;
    }

    public static b a(Context context) {
        return new b(context.getResources().getDisplayMetrics().density);
    }

    public int b(int i10) {
        return (int) ((i10 * this.f41960a) + 0.5f);
    }
}
