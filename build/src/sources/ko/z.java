package ko;

import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CapturePageConfig;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import ko.c4;
import ko.f5;
import ko.h4;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import lo.a;
import vn.e;
import vn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31747a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f31748b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f31749c;

        /* renamed from: d  reason: collision with root package name */
        public static final /* synthetic */ int[] f31750d;

        static {
            int[] iArr = new int[CapturePageConfig.RuleType.values().length];
            try {
                iArr[CapturePageConfig.RuleType.ID_FRONT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[CapturePageConfig.RuleType.ID_FRONT_OR_BACK.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[CapturePageConfig.RuleType.BARCODE_PDF417.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[CapturePageConfig.RuleType.PASSPORT_MRZ.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[CapturePageConfig.RuleType.TEXT_EXTRACTION.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f31747a = iArr;
            int[] iArr2 = new int[CapturePageConfig.OverlayLocalIcon.values().length];
            try {
                iArr2[CapturePageConfig.OverlayLocalIcon.BARCODE.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[CapturePageConfig.OverlayLocalIcon.PASSPORT.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[CapturePageConfig.OverlayLocalIcon.ID_FRONT.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr2[CapturePageConfig.OverlayLocalIcon.ID_BACK.ordinal()] = 4;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr2[CapturePageConfig.OverlayLocalIcon.CORNERS_ONLY.ordinal()] = 5;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr2[CapturePageConfig.OverlayLocalIcon.EMPTY.ordinal()] = 6;
            } catch (NoSuchFieldError unused11) {
            }
            f31748b = iArr2;
            int[] iArr3 = new int[Id.IdLocalIcon.values().length];
            try {
                iArr3[Id.IdLocalIcon.WORLD.ordinal()] = 1;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[Id.IdLocalIcon.CARD.ordinal()] = 2;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[Id.IdLocalIcon.FLAG.ordinal()] = 3;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[Id.IdLocalIcon.HOUSE.ordinal()] = 4;
            } catch (NoSuchFieldError unused15) {
            }
            f31749c = iArr3;
            int[] iArr4 = new int[c4.e.values().length];
            try {
                iArr4[c4.e.f31021o.ordinal()] = 1;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                iArr4[c4.e.f31022p.ordinal()] = 2;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                iArr4[c4.e.f31024r.ordinal()] = 3;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                iArr4[c4.e.f31023q.ordinal()] = 4;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                iArr4[c4.e.f31025s.ordinal()] = 5;
            } catch (NoSuchFieldError unused20) {
            }
            f31750d = iArr4;
        }
    }

    private static final c4.a a(c4.e eVar) {
        int i10 = a.f31750d[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return new c4.a(null, 1, null);
                        }
                        throw new rr.p();
                    }
                    return new c4.a(new vn.f(CollectionsKt.e(new e.b(false, 1, null))));
                }
                return new c4.a(new vn.f(CollectionsKt.e(new e.a(false, 1, null))));
            }
            return new c4.a(new vn.f(CollectionsKt.e(new e.a(false, 1, null))));
        }
        return new c4.a(new vn.f(CollectionsKt.e(new e.c(false, 1, null))));
    }

    private static final c4.d b(long j10) {
        return new c4.d(true, j10);
    }

    private static final f5.d c(ro.e eVar, c4.e eVar2, String str) {
        if (eVar2 == c4.e.f31024r) {
            return f5.d.a.f31169d;
        }
        if (eVar2 == c4.e.f31025s) {
            return f5.d.f.f31175d;
        }
        ro.e eVar3 = ro.e.f49081i;
        if (eVar == eVar3 && eVar2 == c4.e.f31022p && Intrinsics.areEqual(str, "US")) {
            return f5.d.a.f31169d;
        }
        if (eVar == ro.e.f49088u) {
            return f5.d.e.f31174d;
        }
        if (eVar == ro.e.D) {
            return f5.d.e.f31174d;
        }
        if (eVar == eVar3) {
            return f5.d.C0472d.f31173d;
        }
        if (eVar == ro.e.f49082o) {
            return f5.d.C0472d.f31173d;
        }
        if (eVar == ro.e.f49090w) {
            return f5.d.C0472d.f31173d;
        }
        return f5.d.f.f31175d;
    }

    private static final boolean d(CapturePageConfig.RuleSet ruleSet) {
        boolean z10;
        boolean z11;
        List<CapturePageConfig.Rule> rules = ruleSet.getRules();
        if (rules != null) {
            z10 = true;
            z11 = false;
            for (CapturePageConfig.Rule rule : rules) {
                if (Intrinsics.areEqual(rule.isRequired(), Boolean.TRUE) && rule.getType() == null) {
                    z10 = false;
                } else if (rule.getType() != null) {
                    z11 = true;
                }
            }
        } else {
            z10 = true;
            z11 = false;
        }
        if (z10 && z11) {
            return true;
        }
        return false;
    }

    public static final c4.a e(CapturePageConfig.AutoCaptureConfig autoCaptureConfig) {
        Object obj;
        Intrinsics.checkNotNullParameter(autoCaptureConfig, "<this>");
        List<CapturePageConfig.RuleSet> ruleSets = autoCaptureConfig.getRuleSets();
        if (ruleSets == null) {
            return null;
        }
        if (ruleSets.isEmpty()) {
            return new c4.a(null, 1, null);
        }
        Iterator<T> it = ruleSets.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (d((CapturePageConfig.RuleSet) obj)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        CapturePageConfig.RuleSet ruleSet = (CapturePageConfig.RuleSet) obj;
        if (ruleSet == null) {
            return new c4.a(null, 1, null);
        }
        return new c4.a(k(ruleSet));
    }

    public static final c4.c f(CapturePageConfig capturePageConfig, c4.e side, ro.e type, String countryCode, long j10) {
        c4.a a10;
        c4.d b10;
        f5.d c10;
        CapturePageConfig.OverlayConfig overlay;
        CapturePageConfig.ManualCaptureConfig manualCaptureConfig;
        CapturePageConfig.AutoCaptureConfig autoCaptureConfig;
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        if (capturePageConfig == null || (autoCaptureConfig = capturePageConfig.getAutoCaptureConfig()) == null || (a10 = e(autoCaptureConfig)) == null) {
            a10 = a(side);
        }
        if (capturePageConfig == null || (manualCaptureConfig = capturePageConfig.getManualCaptureConfig()) == null || (b10 = g(manualCaptureConfig, j10)) == null) {
            b10 = b(j10);
        }
        c4.d dVar = b10;
        if (a10.a().a().isEmpty() && !dVar.b()) {
            return null;
        }
        String g10 = side.g();
        if (capturePageConfig == null || (overlay = capturePageConfig.getOverlay()) == null || (c10 = h(overlay)) == null) {
            c10 = c(type, side, countryCode);
        }
        return new c4.c(g10, side, c10, a10, dVar);
    }

    public static final c4.d g(CapturePageConfig.ManualCaptureConfig manualCaptureConfig, long j10) {
        boolean z10;
        Intrinsics.checkNotNullParameter(manualCaptureConfig, "<this>");
        Boolean isEnabled = manualCaptureConfig.isEnabled();
        if (isEnabled != null) {
            z10 = isEnabled.booleanValue();
        } else {
            z10 = true;
        }
        Long delayMs = manualCaptureConfig.getDelayMs();
        if (delayMs != null) {
            j10 = delayMs.longValue();
        }
        return new c4.d(z10, j10);
    }

    private static final f5.d h(CapturePageConfig.OverlayConfig overlayConfig) {
        int i10;
        RemoteImage overlay = overlayConfig.getOverlay();
        if (overlay != null) {
            return new f5.d.c(overlay);
        }
        CapturePageConfig.OverlayLocalIcon overlayFallback = overlayConfig.getOverlayFallback();
        if (overlayFallback == null) {
            i10 = -1;
        } else {
            i10 = a.f31748b[overlayFallback.ordinal()];
        }
        switch (i10) {
            case -1:
                return f5.d.f.f31175d;
            case 0:
            default:
                throw new rr.p();
            case 1:
                return f5.d.a.f31169d;
            case 2:
                return f5.d.e.f31174d;
            case 3:
                return f5.d.C0472d.f31173d;
            case 4:
                return f5.d.a.f31169d;
            case 5:
                return f5.d.b.f31170d;
            case 6:
                return f5.d.f.f31175d;
        }
    }

    public static final lo.a i(NextStep.GovernmentId.AutoClassificationConfig autoClassificationConfig, long j10) {
        Boolean bool;
        Boolean bool2;
        CapturePageConfig capturePageConfig;
        a.C0514a c0514a = lo.a.f36209o;
        c4.c cVar = null;
        if (autoClassificationConfig != null) {
            bool = autoClassificationConfig.isEnabled();
        } else {
            bool = null;
        }
        if (autoClassificationConfig != null) {
            bool2 = autoClassificationConfig.getExtractTextFromImage();
        } else {
            bool2 = null;
        }
        if (autoClassificationConfig != null && (capturePageConfig = autoClassificationConfig.getCapturePageConfig()) != null) {
            cVar = f(capturePageConfig, c4.e.f31021o, ro.e.M, "", j10);
        }
        return c0514a.b(bool, bool2, cVar);
    }

    private static final vn.e j(CapturePageConfig.Rule rule) {
        int i10;
        CapturePageConfig.RuleType type = rule.getType();
        if (type == null) {
            i10 = -1;
        } else {
            i10 = a.f31747a[type.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 == 5) {
                                return new e.C0725e(Intrinsics.areEqual(rule.isRequired(), Boolean.TRUE));
                            }
                            throw new rr.p();
                        }
                        return new e.d(Intrinsics.areEqual(rule.isRequired(), Boolean.TRUE));
                    }
                    return new e.a(Intrinsics.areEqual(rule.isRequired(), Boolean.TRUE));
                }
                return new e.b(Intrinsics.areEqual(rule.isRequired(), Boolean.TRUE));
            }
            return new e.c(Intrinsics.areEqual(rule.isRequired(), Boolean.TRUE));
        }
        return null;
    }

    private static final vn.f k(CapturePageConfig.RuleSet ruleSet) {
        List l10;
        List<CapturePageConfig.Rule> rules = ruleSet.getRules();
        if (rules != null) {
            l10 = new ArrayList();
            for (CapturePageConfig.Rule rule : rules) {
                vn.e j10 = j(rule);
                if (j10 != null) {
                    l10.add(j10);
                }
            }
        } else {
            l10 = CollectionsKt.l();
        }
        return new vn.f(l10);
    }

    public static final k0 l(vn.g gVar) {
        Date date;
        Intrinsics.checkNotNullParameter(gVar, "<this>");
        if (gVar instanceof g.a) {
            g.a aVar = (g.a) gVar;
            return new k0(aVar.a(), aVar.b());
        } else if (gVar instanceof g.b) {
            g.b bVar = (g.b) gVar;
            vn.a b10 = bVar.b();
            Date date2 = null;
            if (b10 != null) {
                date = b10.n();
            } else {
                date = null;
            }
            vn.a b11 = bVar.b();
            if (b11 != null) {
                date2 = b11.o();
            }
            return new k0(date, date2);
        } else {
            throw new rr.p();
        }
    }

    public static final k0 m(vn.d0 d0Var) {
        Intrinsics.checkNotNullParameter(d0Var, "<this>");
        return new k0(d0Var.a(), d0Var.b());
    }

    private static final g4 n(Id.IdLocalIcon idLocalIcon) {
        int i10;
        if (idLocalIcon == null) {
            i10 = -1;
        } else {
            i10 = a.f31749c[idLocalIcon.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return g4.f31307o;
                        }
                        throw new rr.p();
                    }
                    return g4.f31306i;
                }
                return g4.f31305e;
            }
            return g4.f31304d;
        }
        return g4.f31305e;
    }

    public static final c4 o(Id id2, String countryCode, long j10) {
        g4 e10;
        String str;
        long j11;
        c4.c f10;
        Intrinsics.checkNotNullParameter(id2, "<this>");
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        ro.e a10 = ro.e.f49079d.a(id2.getClass());
        Id.IdLocalIcon idLocalIcon = null;
        if (a10 == ro.e.M && !id2.isDynamicGovId()) {
            return null;
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        List<CapturePageConfig> capturePageConfigs = id2.getCapturePageConfigs();
        if (capturePageConfigs != null) {
            for (CapturePageConfig capturePageConfig : capturePageConfigs) {
                String side = capturePageConfig.getSide();
                if (side != null) {
                    linkedHashMap.put(side, capturePageConfig);
                }
            }
        }
        List<String> requiresSides = id2.getRequiresSides();
        ArrayList<c4.c> arrayList = new ArrayList(CollectionsKt.w(requiresSides, 10));
        for (String str2 : requiresSides) {
            c4.e a11 = c4.e.f31019e.a(str2);
            if (a11 == null || (f10 = f((CapturePageConfig) linkedHashMap.get(str2), a11, a10, (str = countryCode), (j11 = j10))) == null) {
                return null;
            }
            arrayList.add(f10);
            countryCode = str;
            j10 = j11;
        }
        String str3 = id2.getClass();
        if (id2.isDynamicGovId()) {
            Id.IdIcon icon = id2.getIcon();
            if (icon != null) {
                idLocalIcon = icon.getIconFallback();
            }
            e10 = n(idLocalIcon);
        } else {
            e10 = a10.e();
        }
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (c4.c cVar : arrayList) {
            arrayList2.add(new h4.a(cVar.d()));
        }
        return new c4(str3, e10, arrayList, arrayList2, a10);
    }
}
