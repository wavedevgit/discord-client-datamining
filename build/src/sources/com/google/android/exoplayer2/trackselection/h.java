package com.google.android.exoplayer2.trackselection;

import android.os.SystemClock;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.trackselection.MappingTrackSelector;
import com.google.android.exoplayer2.upstream.h;
import java.util.Arrays;
import java.util.List;
import je.l;
import ji.s;
import qd.u0;
import qd.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {
    public static Tracks a(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, List[] listArr) {
        boolean z10;
        boolean z11;
        s.a aVar = new s.a();
        for (int i10 = 0; i10 < mappedTrackInfo.d(); i10++) {
            w0 f10 = mappedTrackInfo.f(i10);
            List list = listArr[i10];
            for (int i11 = 0; i11 < f10.f47359d; i11++) {
                u0 b10 = f10.b(i11);
                if (mappedTrackInfo.a(i10, i11, false) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                int i12 = b10.f47343d;
                int[] iArr = new int[i12];
                boolean[] zArr = new boolean[i12];
                for (int i13 = 0; i13 < b10.f47343d; i13++) {
                    iArr[i13] = mappedTrackInfo.g(i10, i11, i13);
                    int i14 = 0;
                    while (true) {
                        if (i14 < list.size()) {
                            l lVar = (l) list.get(i14);
                            if (lVar.k().equals(b10) && lVar.j(i13) != -1) {
                                z11 = true;
                                break;
                            }
                            i14++;
                        } else {
                            z11 = false;
                            break;
                        }
                    }
                    zArr[i13] = z11;
                }
                aVar.a(new Tracks.a(b10, z10, iArr, zArr));
            }
        }
        w0 h10 = mappedTrackInfo.h();
        for (int i15 = 0; i15 < h10.f47359d; i15++) {
            u0 b11 = h10.b(i15);
            int[] iArr2 = new int[b11.f47343d];
            Arrays.fill(iArr2, 0);
            aVar.a(new Tracks.a(b11, false, iArr2, new boolean[b11.f47343d]));
        }
        return new Tracks(aVar.k());
    }

    public static Tracks b(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, l[] lVarArr) {
        s r10;
        List[] listArr = new List[lVarArr.length];
        for (int i10 = 0; i10 < lVarArr.length; i10++) {
            l lVar = lVarArr[i10];
            if (lVar != null) {
                r10 = s.s(lVar);
            } else {
                r10 = s.r();
            }
            listArr[i10] = r10;
        }
        return a(mappedTrackInfo, listArr);
    }

    public static h.a c(g gVar) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        int length = gVar.length();
        int i10 = 0;
        for (int i11 = 0; i11 < length; i11++) {
            if (gVar.a(i11, elapsedRealtime)) {
                i10++;
            }
        }
        return new h.a(1, 0, length, i10);
    }
}
