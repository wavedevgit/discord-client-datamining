package q;

import android.content.Context;
import android.graphics.Point;
import android.hardware.display.DisplayManager;
import android.util.Size;
import android.view.Display;
import com.discord.media.utils.DiscordVideoMediaSource;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e3 {

    /* renamed from: e  reason: collision with root package name */
    private static final Size f45876e = new Size(1920, 1080);

    /* renamed from: f  reason: collision with root package name */
    private static final Size f45877f = new Size(320, 240);

    /* renamed from: g  reason: collision with root package name */
    private static final Size f45878g = new Size(DiscordVideoMediaSource.DEFAULT_WIDTH, DiscordVideoMediaSource.DEFAULT_HEIGHT);

    /* renamed from: h  reason: collision with root package name */
    private static final Object f45879h = new Object();

    /* renamed from: i  reason: collision with root package name */
    private static volatile e3 f45880i;

    /* renamed from: a  reason: collision with root package name */
    private final DisplayManager f45881a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Size f45882b = null;

    /* renamed from: c  reason: collision with root package name */
    private final u.l f45883c = new u.l();

    /* renamed from: d  reason: collision with root package name */
    private final u.d f45884d = new u.d();

    private e3(Context context) {
        this.f45881a = (DisplayManager) context.getSystemService(ViewProps.DISPLAY);
    }

    private Size a() {
        Size b10 = b();
        int width = b10.getWidth() * b10.getHeight();
        Size size = f45876e;
        if (width > size.getWidth() * size.getHeight()) {
            b10 = size;
        }
        return this.f45883c.a(b10);
    }

    private Size b() {
        Point point = new Point();
        d(false).getRealSize(point);
        Size size = new Size(point.x, point.y);
        if (i0.d.c(size, f45877f) && (size = this.f45884d.a()) == null) {
            size = f45878g;
        }
        if (size.getHeight() > size.getWidth()) {
            return new Size(size.getHeight(), size.getWidth());
        }
        return size;
    }

    public static e3 c(Context context) {
        if (f45880i == null) {
            synchronized (f45879h) {
                try {
                    if (f45880i == null) {
                        f45880i = new e3(context);
                    }
                } finally {
                }
            }
        }
        return f45880i;
    }

    private Display e(Display[] displayArr, boolean z10) {
        Display display = null;
        int i10 = -1;
        for (Display display2 : displayArr) {
            if (!z10 || display2.getState() != 1) {
                Point point = new Point();
                display2.getRealSize(point);
                int i11 = point.x;
                int i12 = point.y;
                if (i11 * i12 > i10) {
                    display = display2;
                    i10 = i11 * i12;
                }
            }
        }
        return display;
    }

    public Display d(boolean z10) {
        Display[] displays = this.f45881a.getDisplays();
        if (displays.length == 1) {
            return displays[0];
        }
        Display e10 = e(displays, z10);
        if (e10 == null && z10) {
            e10 = e(displays, false);
        }
        if (e10 != null) {
            return e10;
        }
        throw new IllegalArgumentException("No display can be found from the input display manager!");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Size f() {
        if (this.f45882b != null) {
            return this.f45882b;
        }
        this.f45882b = a();
        return this.f45882b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g() {
        this.f45882b = a();
    }
}
