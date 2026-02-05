package b0;

import android.util.Size;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements Comparator {

    /* renamed from: d  reason: collision with root package name */
    private boolean f6025d;

    public d() {
        this(false);
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(Size size, Size size2) {
        int signum = Long.signum((size.getWidth() * size.getHeight()) - (size2.getWidth() * size2.getHeight()));
        if (this.f6025d) {
            return signum * (-1);
        }
        return signum;
    }

    public d(boolean z10) {
        this.f6025d = z10;
    }
}
