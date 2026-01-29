package i0;

import android.util.Size;
import com.discord.media.utils.DiscordVideoMediaSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    public static final Size f28321a = new Size(0, 0);

    /* renamed from: b  reason: collision with root package name */
    public static final Size f28322b = new Size(320, 240);

    /* renamed from: c  reason: collision with root package name */
    public static final Size f28323c = new Size(DiscordVideoMediaSource.DEFAULT_WIDTH, DiscordVideoMediaSource.DEFAULT_HEIGHT);

    /* renamed from: d  reason: collision with root package name */
    public static final Size f28324d = new Size(720, DiscordVideoMediaSource.DEFAULT_HEIGHT);

    /* renamed from: e  reason: collision with root package name */
    public static final Size f28325e = new Size(1280, 720);

    /* renamed from: f  reason: collision with root package name */
    public static final Size f28326f = new Size(1920, 1080);

    /* renamed from: g  reason: collision with root package name */
    public static final Size f28327g = new Size(1920, 1440);

    public static int a(int i10, int i11) {
        return i10 * i11;
    }

    public static int b(Size size) {
        return a(size.getWidth(), size.getHeight());
    }

    public static boolean c(Size size, Size size2) {
        if (b(size) < b(size2)) {
            return true;
        }
        return false;
    }
}
