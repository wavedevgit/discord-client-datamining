package uc;

import com.google.android.exoplayer2.metadata.Metadata;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v {

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f51527c = Pattern.compile("^ [0-9a-fA-F]{8} ([0-9a-fA-F]{8}) ([0-9a-fA-F]{8})");

    /* renamed from: a  reason: collision with root package name */
    public int f51528a = -1;

    /* renamed from: b  reason: collision with root package name */
    public int f51529b = -1;

    private boolean b(String str) {
        Matcher matcher = f51527c.matcher(str);
        if (matcher.find()) {
            try {
                int parseInt = Integer.parseInt((String) w0.j(matcher.group(1)), 16);
                int parseInt2 = Integer.parseInt((String) w0.j(matcher.group(2)), 16);
                if (parseInt > 0 || parseInt2 > 0) {
                    this.f51528a = parseInt;
                    this.f51529b = parseInt2;
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
        if (this.f51528a != -1 && this.f51529b != -1) {
            return true;
        }
        return false;
    }

    public boolean c(Metadata metadata) {
        for (int i10 = 0; i10 < metadata.e(); i10++) {
            Metadata.b d10 = metadata.d(i10);
            if (d10 instanceof md.e) {
                md.e eVar = (md.e) d10;
                if ("iTunSMPB".equals(eVar.f36928i) && b(eVar.f36929o)) {
                    return true;
                }
            } else if (d10 instanceof md.j) {
                md.j jVar = (md.j) d10;
                if ("com.apple.iTunes".equals(jVar.f36940e) && "iTunSMPB".equals(jVar.f36941i) && b(jVar.f36942o)) {
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
        this.f51528a = i11;
        this.f51529b = i12;
        return true;
    }
}
