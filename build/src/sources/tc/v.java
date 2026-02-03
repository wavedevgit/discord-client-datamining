package tc;

import com.google.android.exoplayer2.metadata.Metadata;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v {

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f49782c = Pattern.compile("^ [0-9a-fA-F]{8} ([0-9a-fA-F]{8}) ([0-9a-fA-F]{8})");

    /* renamed from: a  reason: collision with root package name */
    public int f49783a = -1;

    /* renamed from: b  reason: collision with root package name */
    public int f49784b = -1;

    private boolean b(String str) {
        Matcher matcher = f49782c.matcher(str);
        if (matcher.find()) {
            try {
                int parseInt = Integer.parseInt((String) w0.j(matcher.group(1)), 16);
                int parseInt2 = Integer.parseInt((String) w0.j(matcher.group(2)), 16);
                if (parseInt > 0 || parseInt2 > 0) {
                    this.f49783a = parseInt;
                    this.f49784b = parseInt2;
                    return true;
                }
                return false;
            } catch (NumberFormatException unused) {
                return false;
            }
        }
        return false;
    }

    public boolean a() {
        if (this.f49783a != -1 && this.f49784b != -1) {
            return true;
        }
        return false;
    }

    public boolean c(Metadata metadata) {
        for (int i10 = 0; i10 < metadata.e(); i10++) {
            Metadata.b d10 = metadata.d(i10);
            if (d10 instanceof ld.e) {
                ld.e eVar = (ld.e) d10;
                if ("iTunSMPB".equals(eVar.f37261i) && b(eVar.f37262o)) {
                    return true;
                }
            } else if (d10 instanceof ld.j) {
                ld.j jVar = (ld.j) d10;
                if ("com.apple.iTunes".equals(jVar.f37273e) && "iTunSMPB".equals(jVar.f37274i) && b(jVar.f37275o)) {
                    return true;
                }
            } else {
                continue;
            }
        }
        return false;
    }

    public boolean d(int i10) {
        int i11 = i10 >> 12;
        int i12 = i10 & 4095;
        if (i11 <= 0 && i12 <= 0) {
            return false;
        }
        this.f49783a = i11;
        this.f49784b = i12;
        return true;
    }
}
