package v5;

import android.graphics.Color;
import android.graphics.Rect;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import t5.e;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class v {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51182a = c.a.a("nm", "ind", "refId", "ty", "parent", "sw", "sh", "sc", "ks", "tt", "masksProperties", "shapes", "t", "ef", "sr", "st", "w", "h", "ip", "op", "tm", "cl", "hd", "ao", "bm");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f51183b = c.a.a("d", "a");

    /* renamed from: c  reason: collision with root package name */
    private static final c.a f51184c = c.a.a("ty", "nm");

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51185a;

        static {
            int[] iArr = new int[e.b.values().length];
            f51185a = iArr;
            try {
                iArr[e.b.LUMA.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51185a[e.b.LUMA_INVERTED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public static t5.e a(l5.i iVar) {
        Rect b10 = iVar.b();
        List list = Collections.EMPTY_LIST;
        return new t5.e(list, iVar, "__container", -1L, e.a.PRE_COMP, -1L, null, list, new r5.l(), 0, 0, 0, 0.0f, 0.0f, b10.width(), b10.height(), null, null, list, e.b.NONE, null, false, null, null, s5.h.NORMAL);
    }

    public static t5.e b(w5.c cVar, l5.i iVar) {
        Float f10;
        boolean z10;
        float f11;
        Float valueOf = Float.valueOf(0.0f);
        Float valueOf2 = Float.valueOf(1.0f);
        e.b bVar = e.b.NONE;
        s5.h hVar = s5.h.NORMAL;
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        cVar.r();
        boolean z11 = false;
        e.b bVar2 = bVar;
        s5.h hVar2 = hVar;
        float f12 = 0.0f;
        float f13 = 0.0f;
        float f14 = 0.0f;
        float f15 = 0.0f;
        float f16 = 0.0f;
        String str = null;
        r5.j jVar = null;
        r5.k kVar = null;
        r5.b bVar3 = null;
        s5.a aVar = null;
        j jVar2 = null;
        long j10 = 0;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        boolean z12 = false;
        long j11 = -1;
        float f17 = 1.0f;
        String str2 = "UNSET";
        String str3 = null;
        r5.l lVar = null;
        e.a aVar2 = null;
        boolean z13 = false;
        while (cVar.hasNext()) {
            switch (cVar.B(f51182a)) {
                case 0:
                    str2 = cVar.f1();
                    break;
                case 1:
                    j10 = cVar.nextInt();
                    break;
                case 2:
                    str = cVar.f1();
                    break;
                case 3:
                    f11 = f17;
                    int nextInt = cVar.nextInt();
                    aVar2 = e.a.UNKNOWN;
                    if (nextInt < aVar2.ordinal()) {
                        aVar2 = e.a.values()[nextInt];
                    }
                    f17 = f11;
                    break;
                case 4:
                    j11 = cVar.nextInt();
                    break;
                case 5:
                    i10 = (int) (cVar.nextInt() * x5.j.e());
                    break;
                case 6:
                    i11 = (int) (cVar.nextInt() * x5.j.e());
                    break;
                case 7:
                    i12 = Color.parseColor(cVar.f1());
                    break;
                case 8:
                    lVar = c.g(cVar, iVar);
                    break;
                case 9:
                    f11 = f17;
                    int nextInt2 = cVar.nextInt();
                    if (nextInt2 >= e.b.values().length) {
                        iVar.a("Unsupported matte type: " + nextInt2);
                    } else {
                        bVar2 = e.b.values()[nextInt2];
                        int i13 = a.f51185a[bVar2.ordinal()];
                        if (i13 != 1) {
                            if (i13 == 2) {
                                iVar.a("Unsupported matte type: Luma Inverted");
                            }
                        } else {
                            iVar.a("Unsupported matte type: Luma");
                        }
                        iVar.r(1);
                    }
                    f17 = f11;
                    break;
                case 10:
                    f11 = f17;
                    cVar.u();
                    while (cVar.hasNext()) {
                        arrayList.add(x.a(cVar, iVar));
                    }
                    iVar.r(arrayList.size());
                    cVar.s();
                    f17 = f11;
                    break;
                case 11:
                    f11 = f17;
                    cVar.u();
                    while (cVar.hasNext()) {
                        s5.c a10 = h.a(cVar, iVar);
                        if (a10 != null) {
                            arrayList2.add(a10);
                        }
                    }
                    cVar.s();
                    f17 = f11;
                    break;
                case 12:
                    f11 = f17;
                    cVar.r();
                    while (cVar.hasNext()) {
                        int B = cVar.B(f51183b);
                        if (B != 0) {
                            if (B != 1) {
                                cVar.E();
                                cVar.P();
                            } else {
                                cVar.u();
                                if (cVar.hasNext()) {
                                    kVar = b.a(cVar, iVar);
                                }
                                while (cVar.hasNext()) {
                                    cVar.P();
                                }
                                cVar.s();
                            }
                        } else {
                            jVar = d.d(cVar, iVar);
                        }
                    }
                    cVar.y();
                    f17 = f11;
                    break;
                case 13:
                    f11 = f17;
                    cVar.u();
                    ArrayList arrayList3 = new ArrayList();
                    while (cVar.hasNext()) {
                        cVar.r();
                        while (cVar.hasNext()) {
                            int B2 = cVar.B(f51184c);
                            if (B2 != 0) {
                                if (B2 != 1) {
                                    cVar.E();
                                    cVar.P();
                                } else {
                                    arrayList3.add(cVar.f1());
                                }
                            } else {
                                int nextInt3 = cVar.nextInt();
                                if (nextInt3 == 29) {
                                    aVar = e.b(cVar, iVar);
                                } else if (nextInt3 == 25) {
                                    jVar2 = new k().b(cVar, iVar);
                                }
                            }
                        }
                        cVar.y();
                    }
                    cVar.s();
                    iVar.a("Lottie doesn't support layer effects. If you are using them for  fills, strokes, trim paths etc. then try adding them directly as contents  in your shape. Found: " + arrayList3);
                    f17 = f11;
                    break;
                case 14:
                    f17 = (float) cVar.nextDouble();
                    break;
                case 15:
                    f16 = (float) cVar.nextDouble();
                    break;
                case 16:
                    f11 = f17;
                    f14 = (float) (cVar.nextDouble() * x5.j.e());
                    f17 = f11;
                    break;
                case 17:
                    f11 = f17;
                    f15 = (float) (cVar.nextDouble() * x5.j.e());
                    f17 = f11;
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    f12 = (float) cVar.nextDouble();
                    continue;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    f13 = (float) cVar.nextDouble();
                    continue;
                case 20:
                    bVar3 = d.f(cVar, iVar, z11);
                    continue;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    str3 = cVar.f1();
                    continue;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    z12 = cVar.h();
                    continue;
                case 23:
                    if (cVar.nextInt() == 1) {
                        z13 = true;
                    } else {
                        z13 = z11;
                        continue;
                    }
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    int nextInt4 = cVar.nextInt();
                    if (nextInt4 >= s5.h.values().length) {
                        iVar.a("Unsupported Blend Mode: " + nextInt4);
                        hVar2 = s5.h.NORMAL;
                    } else {
                        hVar2 = s5.h.values()[nextInt4];
                        continue;
                    }
                default:
                    cVar.E();
                    cVar.P();
                    f11 = f17;
                    f17 = f11;
                    break;
            }
            z11 = false;
        }
        float f18 = f17;
        cVar.y();
        ArrayList arrayList4 = new ArrayList();
        if (f12 > 0.0f) {
            z10 = z13;
            f10 = valueOf;
            arrayList4.add(new y5.a(iVar, valueOf, valueOf, null, 0.0f, Float.valueOf(f12)));
        } else {
            f10 = valueOf;
            z10 = z13;
        }
        if (f13 <= 0.0f) {
            f13 = iVar.f();
        }
        arrayList4.add(new y5.a(iVar, valueOf2, valueOf2, null, f12, Float.valueOf(f13)));
        arrayList4.add(new y5.a(iVar, f10, f10, null, f13, Float.valueOf(Float.MAX_VALUE)));
        if (str2.endsWith(".ai") || "ai".equals(str3)) {
            iVar.a("Convert your Illustrator layers to shape layers.");
        }
        if (z10) {
            if (lVar == null) {
                lVar = new r5.l();
            }
            lVar.m(z10);
        }
        return new t5.e(arrayList2, iVar, str2, j10, aVar2, j11, str, arrayList, lVar, i10, i11, i12, f18, f16, f14, f15, jVar, kVar, arrayList4, bVar2, bVar3, z12, aVar, jVar2, hVar2);
    }
}
