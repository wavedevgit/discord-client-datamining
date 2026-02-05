package q;

import a0.m2;
import a0.o2;
import android.content.Context;
import android.graphics.SurfaceTexture;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.params.StreamConfigurationMap;
import android.media.CamcorderProfile;
import android.media.MediaRecorder;
import android.os.Build;
import android.util.Pair;
import android.util.Range;
import android.util.Rational;
import android.util.Size;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f4 {

    /* renamed from: i  reason: collision with root package name */
    private final String f46810i;

    /* renamed from: j  reason: collision with root package name */
    private final f f46811j;

    /* renamed from: k  reason: collision with root package name */
    private final r.a0 f46812k;

    /* renamed from: l  reason: collision with root package name */
    private final u.f f46813l;

    /* renamed from: m  reason: collision with root package name */
    private final int f46814m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f46815n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f46816o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f46817p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f46818q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f46819r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f46820s;

    /* renamed from: t  reason: collision with root package name */
    a0.p2 f46821t;

    /* renamed from: v  reason: collision with root package name */
    private final e3 f46823v;

    /* renamed from: y  reason: collision with root package name */
    private final f3 f46826y;

    /* renamed from: a  reason: collision with root package name */
    private final List f46802a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f46803b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final List f46804c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private final List f46805d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private final Map f46806e = new HashMap();

    /* renamed from: f  reason: collision with root package name */
    private final List f46807f = new ArrayList();

    /* renamed from: g  reason: collision with root package name */
    private final List f46808g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f46809h = new ArrayList();

    /* renamed from: u  reason: collision with root package name */
    List f46822u = new ArrayList();

    /* renamed from: w  reason: collision with root package name */
    private final u.y f46824w = new u.y();

    /* renamed from: x  reason: collision with root package name */
    private final u.u f46825x = new u.u();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static Size[] a(StreamConfigurationMap streamConfigurationMap, int i10) {
            return streamConfigurationMap.getHighResolutionOutputSizes(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        static b e(int i10, int i11, boolean z10, boolean z11) {
            return new e(i10, i11, z10, z11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int b();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract boolean c();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract boolean d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f4(Context context, String str, r.n0 n0Var, f fVar) {
        int i10;
        this.f46815n = false;
        this.f46816o = false;
        this.f46817p = false;
        this.f46818q = false;
        this.f46819r = false;
        this.f46820s = false;
        String str2 = (String) b2.e.g(str);
        this.f46810i = str2;
        this.f46811j = (f) b2.e.g(fVar);
        this.f46813l = new u.f();
        this.f46823v = e3.c(context);
        try {
            r.a0 c10 = n0Var.c(str2);
            this.f46812k = c10;
            Integer num = (Integer) c10.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
            if (num != null) {
                i10 = num.intValue();
            } else {
                i10 = 2;
            }
            this.f46814m = i10;
            int[] iArr = (int[]) c10.a(CameraCharacteristics.REQUEST_AVAILABLE_CAPABILITIES);
            if (iArr != null) {
                for (int i11 : iArr) {
                    if (i11 == 3) {
                        this.f46815n = true;
                    } else if (i11 == 6) {
                        this.f46816o = true;
                    } else if (Build.VERSION.SDK_INT >= 31 && i11 == 16) {
                        this.f46819r = true;
                    }
                }
            }
            f3 f3Var = new f3(this.f46812k);
            this.f46826y = f3Var;
            k();
            if (this.f46819r) {
                n();
            }
            boolean hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.camera.concurrent");
            this.f46817p = hasSystemFeature;
            if (hasSystemFeature) {
                h();
            }
            if (f3Var.d()) {
                g();
            }
            if (J()) {
                m();
            }
            boolean h10 = d4.h(this.f46812k);
            this.f46818q = h10;
            if (h10) {
                j();
            }
            boolean a10 = x4.a(this.f46812k);
            this.f46820s = a10;
            if (a10) {
                i();
            }
            l();
            b();
        } catch (r.f e10) {
            throw o2.a(e10);
        }
    }

    private List B(b bVar) {
        List list;
        if (this.f46806e.containsKey(bVar)) {
            return (List) this.f46806e.get(bVar);
        }
        List arrayList = new ArrayList();
        if (bVar.d()) {
            if (bVar.a() == 0) {
                arrayList.addAll(this.f46808g);
            }
        } else if (bVar.b() == 8) {
            int a10 = bVar.a();
            if (a10 != 1) {
                if (a10 != 2) {
                    if (bVar.c()) {
                        list = this.f46805d;
                    } else {
                        list = this.f46802a;
                    }
                    arrayList.addAll(list);
                } else {
                    arrayList.addAll(this.f46803b);
                    arrayList.addAll(this.f46802a);
                }
            } else {
                arrayList = this.f46804c;
            }
        } else if (bVar.b() == 10 && bVar.a() == 0) {
            arrayList.addAll(this.f46807f);
        }
        this.f46806e.put(bVar, arrayList);
        return arrayList;
    }

    private Pair C(int i10, List list, List list2, List list3, List list4, int i11, Map map, Map map2) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            a0.a aVar = (a0.a) it.next();
            arrayList.add(aVar.g());
            if (map != null) {
                map.put(Integer.valueOf(arrayList.size() - 1), aVar);
            }
        }
        for (int i12 = 0; i12 < list2.size(); i12++) {
            Size size = (Size) list2.get(i12);
            a0.x2 x2Var = (a0.x2) list3.get(((Integer) list4.get(i12)).intValue());
            int inputFormat = x2Var.getInputFormat();
            arrayList.add(a0.o2.h(i10, inputFormat, size, F(inputFormat)));
            if (map2 != null) {
                map2.put(Integer.valueOf(arrayList.size() - 1), x2Var);
            }
            i11 = E(i11, x2Var.getInputFormat(), size);
        }
        return new Pair(arrayList, Integer.valueOf(i11));
    }

    private Range D(List list, List list2, List list3) {
        Iterator it = list.iterator();
        Range range = null;
        while (it.hasNext()) {
            range = G(((a0.a) it.next()).h(), range);
        }
        Iterator it2 = list3.iterator();
        while (it2.hasNext()) {
            range = G(((a0.x2) list2.get(((Integer) it2.next()).intValue())).u(null), range);
        }
        return range;
    }

    private int E(int i10, int i11, Size size) {
        return Math.min(i10, q(this.f46812k, i11, size));
    }

    private Range G(Range range, Range range2) {
        if (range2 == null) {
            return range;
        }
        if (range != null) {
            try {
                return range2.intersect(range);
            } catch (IllegalArgumentException unused) {
            }
        }
        return range2;
    }

    private static List H(List list) {
        ArrayList arrayList = new ArrayList();
        ArrayList<Integer> arrayList2 = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            int w10 = ((a0.x2) it.next()).w(0);
            if (!arrayList2.contains(Integer.valueOf(w10))) {
                arrayList2.add(Integer.valueOf(w10));
            }
        }
        Collections.sort(arrayList2);
        Collections.reverse(arrayList2);
        for (Integer num : arrayList2) {
            int intValue = num.intValue();
            Iterator it2 = list.iterator();
            while (it2.hasNext()) {
                a0.x2 x2Var = (a0.x2) it2.next();
                if (intValue == x2Var.w(0)) {
                    arrayList.add(Integer.valueOf(list.indexOf(x2Var)));
                }
            }
        }
        return arrayList;
    }

    private static boolean I(List list, Map map) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            if (((a0.a) it.next()).d() == 4101) {
                return true;
            }
        }
        for (a0.x2 x2Var : map.keySet()) {
            if (x2Var.getInputFormat() == 4101) {
                return true;
            }
        }
        return false;
    }

    private boolean J() {
        int[] b10 = this.f46812k.b().b();
        if (b10 == null) {
            return false;
        }
        for (int i10 : b10) {
            if (i10 == 4101) {
                return true;
            }
        }
        return false;
    }

    private boolean K(b bVar, List list, Map map) {
        boolean z10;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(((a0.a) it.next()).g());
        }
        b0.d dVar = new b0.d();
        for (a0.x2 x2Var : map.keySet()) {
            List list2 = (List) map.get(x2Var);
            if (list2 != null && !list2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.b(z10, "No available output size is found for " + x2Var + ".");
            int inputFormat = x2Var.getInputFormat();
            arrayList.add(a0.o2.h(bVar.a(), inputFormat, (Size) Collections.min(list2, dVar), F(inputFormat)));
        }
        return c(bVar, arrayList);
    }

    private void L() {
        this.f46823v.g();
        if (this.f46821t == null) {
            l();
            return;
        }
        this.f46821t = a0.p2.a(this.f46821t.b(), this.f46821t.j(), this.f46823v.f(), this.f46821t.h(), this.f46821t.f(), this.f46821t.d(), this.f46821t.l());
    }

    private void N(Map map, int i10) {
        Size r10 = r(this.f46812k.b().d(), i10, true);
        if (r10 != null) {
            map.put(Integer.valueOf(i10), r10);
        }
    }

    private void O(Map map, Size size, int i10) {
        if (!this.f46817p) {
            return;
        }
        Size r10 = r(this.f46812k.b().d(), i10, false);
        Integer valueOf = Integer.valueOf(i10);
        if (r10 != null) {
            size = (Size) Collections.min(Arrays.asList(size, r10), new b0.d());
        }
        map.put(valueOf, size);
    }

    private void P(Map map, int i10) {
        CameraCharacteristics.Key key;
        if (Build.VERSION.SDK_INT >= 31 && this.f46819r) {
            r.a0 a0Var = this.f46812k;
            key = CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP_MAXIMUM_RESOLUTION;
            StreamConfigurationMap streamConfigurationMap = (StreamConfigurationMap) a0Var.a(key);
            if (streamConfigurationMap != null) {
                map.put(Integer.valueOf(i10), r(streamConfigurationMap, i10, true));
            }
        }
    }

    private static Range d(Range range, Range range2, Range range3) {
        int i10;
        double v10 = v(range2.intersect(range));
        double v11 = v(range3.intersect(range));
        double v12 = v11 / v(range3);
        double v13 = v10 / v(range2);
        int i11 = (v11 > v10 ? 1 : (v11 == v10 ? 0 : -1));
        if (i11 <= 0 ? !(i11 != 0 ? v13 >= 0.5d || v12 <= v13 : v12 <= v13 && (i10 != 0 || ((Integer) range3.getLower()).intValue() <= ((Integer) range2.getLower()).intValue())) : !(v12 < 0.5d && v12 < v13)) {
            return range3;
        }
        return range2;
    }

    private b e(int i10, Map map, boolean z10, boolean z11) {
        int z12 = z(map);
        if (i10 != 0 && z11) {
            throw new IllegalArgumentException(String.format("Camera device id is %s. Ultra HDR is not currently supported in %s camera mode.", this.f46810i, a0.f0.a(i10)));
        }
        if (i10 != 0 && z12 == 10) {
            throw new IllegalArgumentException(String.format("Camera device id is %s. 10 bit dynamic range is not currently supported in %s camera mode.", this.f46810i, a0.f0.a(i10)));
        }
        return b.e(i10, z12, z10, z11);
    }

    private Map f(Map map, b bVar, Range range) {
        int i10;
        HashMap hashMap = new HashMap();
        for (a0.x2 x2Var : map.keySet()) {
            ArrayList arrayList = new ArrayList();
            HashMap hashMap2 = new HashMap();
            for (Size size : (List) map.get(x2Var)) {
                int inputFormat = x2Var.getInputFormat();
                o2.a c10 = a0.o2.h(bVar.a(), inputFormat, size, F(inputFormat)).c();
                if (range != null) {
                    i10 = q(this.f46812k, inputFormat, size);
                } else {
                    i10 = Integer.MAX_VALUE;
                }
                Set set = (Set) hashMap2.get(c10);
                if (set == null) {
                    set = new HashSet();
                    hashMap2.put(c10, set);
                }
                if (!set.contains(Integer.valueOf(i10))) {
                    arrayList.add(size);
                    set.add(Integer.valueOf(i10));
                }
            }
            hashMap.put(x2Var, arrayList);
        }
        return hashMap;
    }

    private void g() {
        this.f46807f.addAll(w3.b());
    }

    private void h() {
        this.f46804c.addAll(w3.d());
    }

    private void i() {
        if (Build.VERSION.SDK_INT >= 33) {
            this.f46805d.addAll(w3.i());
        }
    }

    private void j() {
        if (Build.VERSION.SDK_INT >= 33) {
            this.f46809h.addAll(w3.k());
        }
    }

    private void k() {
        this.f46802a.addAll(w3.a(this.f46814m, this.f46815n, this.f46816o));
        this.f46802a.addAll(this.f46813l.a(this.f46810i));
    }

    private void l() {
        this.f46821t = a0.p2.a(i0.d.f27198c, new HashMap(), this.f46823v.f(), new HashMap(), w(), new HashMap(), new HashMap());
    }

    private void m() {
        this.f46808g.addAll(w3.l());
    }

    private void n() {
        this.f46803b.addAll(w3.m());
    }

    private List o(List list) {
        Iterator it = list.iterator();
        int i10 = 1;
        while (it.hasNext()) {
            i10 *= ((List) it.next()).size();
        }
        if (i10 != 0) {
            ArrayList arrayList = new ArrayList();
            for (int i11 = 0; i11 < i10; i11++) {
                arrayList.add(new ArrayList());
            }
            int size = i10 / ((List) list.get(0)).size();
            int i12 = i10;
            for (int i13 = 0; i13 < list.size(); i13++) {
                List list2 = (List) list.get(i13);
                for (int i14 = 0; i14 < i10; i14++) {
                    ((List) arrayList.get(i14)).add((Size) list2.get((i14 % i12) / size));
                }
                if (i13 < list.size() - 1) {
                    i12 = size;
                    size /= ((List) list.get(i13 + 1)).size();
                }
            }
            return arrayList;
        }
        throw new IllegalArgumentException("Failed to find supported resolutions.");
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r5v1 */
    /* JADX WARN: Type inference failed for: r9v0, types: [android.util.Range] */
    private Range p(Range range, int i10) {
        if (range != 0) {
            Range range2 = a0.m2.f165a;
            if (!range.equals(range2)) {
                Range[] rangeArr = (Range[]) this.f46812k.a(CameraCharacteristics.CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES);
                if (rangeArr == null) {
                    return range2;
                }
                Range range3 = new Range(Integer.valueOf(Math.min(((Integer) range.getLower()).intValue(), i10)), Integer.valueOf(Math.min(((Integer) range.getUpper()).intValue(), i10)));
                int i11 = 0;
                for (Range range4 : rangeArr) {
                    if (i10 >= ((Integer) range4.getLower()).intValue()) {
                        if (range2.equals(a0.m2.f165a)) {
                            range2 = range4;
                        }
                        if (range4.equals(range3)) {
                            return range4;
                        }
                        try {
                            int v10 = v(range4.intersect(range3));
                            if (i11 == 0) {
                                i11 = v10;
                            } else {
                                if (v10 >= i11) {
                                    range2 = d(range3, range2, range4);
                                    i11 = v(range3.intersect(range2));
                                }
                                range4 = range2;
                            }
                        } catch (IllegalArgumentException unused) {
                            if (i11 == 0) {
                                if (u(range4, range3) >= u(range2, range3)) {
                                    if (u(range4, range3) == u(range2, range3)) {
                                        if (((Integer) range4.getLower()).intValue() <= ((Integer) range2.getUpper()).intValue() && v(range4) >= v(range2)) {
                                        }
                                    }
                                }
                            }
                        }
                        range2 = range4;
                    }
                }
                return range2;
            }
        }
        return a0.m2.f165a;
    }

    static int q(r.a0 a0Var, int i10, Size size) {
        try {
            return (int) (1.0E9d / ((StreamConfigurationMap) a0Var.a(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP)).getOutputMinFrameDuration(i10, size));
        } catch (Exception unused) {
            return 0;
        }
    }

    private Size r(StreamConfigurationMap streamConfigurationMap, int i10, boolean z10) {
        Size[] outputSizes;
        Size[] a10;
        if (i10 == 34) {
            outputSizes = streamConfigurationMap.getOutputSizes(SurfaceTexture.class);
        } else {
            outputSizes = streamConfigurationMap.getOutputSizes(i10);
        }
        if (outputSizes != null && outputSizes.length != 0) {
            b0.d dVar = new b0.d();
            Size size = (Size) Collections.max(Arrays.asList(outputSizes), dVar);
            Size size2 = i0.d.f27196a;
            if (z10 && (a10 = a.a(streamConfigurationMap, i10)) != null && a10.length > 0) {
                size2 = (Size) Collections.max(Arrays.asList(a10), dVar);
            }
            return (Size) Collections.max(Arrays.asList(size, size2), dVar);
        }
        return null;
    }

    private int s(List list) {
        Iterator it = list.iterator();
        int i10 = Integer.MAX_VALUE;
        while (it.hasNext()) {
            a0.a aVar = (a0.a) it.next();
            i10 = E(i10, aVar.d(), aVar.f());
        }
        return i10;
    }

    private static int u(Range range, Range range2) {
        boolean z10;
        if (!range.contains((Range) ((Integer) range2.getUpper())) && !range.contains((Range) ((Integer) range2.getLower()))) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "Ranges must not intersect");
        if (((Integer) range.getLower()).intValue() > ((Integer) range2.getUpper()).intValue()) {
            return ((Integer) range.getLower()).intValue() - ((Integer) range2.getUpper()).intValue();
        }
        return ((Integer) range2.getLower()).intValue() - ((Integer) range.getUpper()).intValue();
    }

    private static int v(Range range) {
        return (((Integer) range.getUpper()).intValue() - ((Integer) range.getLower()).intValue()) + 1;
    }

    private Size w() {
        CamcorderProfile camcorderProfile;
        try {
            int parseInt = Integer.parseInt(this.f46810i);
            if (this.f46811j.b(parseInt, 1)) {
                camcorderProfile = this.f46811j.a(parseInt, 1);
            } else {
                camcorderProfile = null;
            }
            if (camcorderProfile != null) {
                return new Size(camcorderProfile.videoFrameWidth, camcorderProfile.videoFrameHeight);
            }
            return x(parseInt);
        } catch (NumberFormatException unused) {
            return y();
        }
    }

    private Size x(int i10) {
        CamcorderProfile camcorderProfile;
        Size size = i0.d.f27199d;
        if (this.f46811j.b(i10, 10)) {
            camcorderProfile = this.f46811j.a(i10, 10);
        } else if (this.f46811j.b(i10, 8)) {
            camcorderProfile = this.f46811j.a(i10, 8);
        } else if (this.f46811j.b(i10, 12)) {
            camcorderProfile = this.f46811j.a(i10, 12);
        } else if (this.f46811j.b(i10, 6)) {
            camcorderProfile = this.f46811j.a(i10, 6);
        } else if (this.f46811j.b(i10, 5)) {
            camcorderProfile = this.f46811j.a(i10, 5);
        } else if (this.f46811j.b(i10, 4)) {
            camcorderProfile = this.f46811j.a(i10, 4);
        } else {
            camcorderProfile = null;
        }
        if (camcorderProfile != null) {
            return new Size(camcorderProfile.videoFrameWidth, camcorderProfile.videoFrameHeight);
        }
        return size;
    }

    private Size y() {
        Size[] outputSizes = this.f46812k.b().d().getOutputSizes(MediaRecorder.class);
        if (outputSizes == null) {
            return i0.d.f27199d;
        }
        Arrays.sort(outputSizes, new b0.d(true));
        for (Size size : outputSizes) {
            int width = size.getWidth();
            Size size2 = i0.d.f27201f;
            if (width <= size2.getWidth() && size.getHeight() <= size2.getHeight()) {
                return size;
            }
        }
        return i0.d.f27199d;
    }

    private static int z(Map map) {
        for (x.z zVar : map.values()) {
            if (zVar.a() == 10) {
                return 10;
            }
        }
        return 8;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Pair A(int i10, List list, Map map, boolean z10, boolean z11) {
        int i11;
        Map map2;
        Map map3;
        HashMap hashMap;
        List list2;
        Map map4;
        List list3;
        String str;
        String str2;
        int i12;
        Map map5;
        List list4;
        List list5;
        HashMap hashMap2;
        boolean z12;
        L();
        List<a0.x2> arrayList = new ArrayList(map.keySet());
        List<Integer> H = H(arrayList);
        Map g10 = this.f46826y.g(list, arrayList, H);
        b e10 = e(i10, g10, z10, I(list, map));
        boolean K = K(e10, list, map);
        String str3 = " New configs: ";
        String str4 = "No supported surface combination is found for camera device - Id : ";
        if (!K) {
            throw new IllegalArgumentException("No supported surface combination is found for camera device - Id : " + this.f46810i + ".  May be attempting to bind too many use cases. Existing surfaces: " + list + " New configs: " + arrayList);
        }
        Range D = D(list, arrayList, H);
        Map f10 = f(map, e10, D);
        List arrayList2 = new ArrayList();
        for (Integer num : H) {
            a0.x2 x2Var = (a0.x2) arrayList.get(num.intValue());
            arrayList2.add(a((List) f10.get(x2Var), x2Var.getInputFormat()));
            f10 = f10;
        }
        List o10 = o(arrayList2);
        HashMap hashMap3 = new HashMap();
        HashMap hashMap4 = new HashMap();
        Map hashMap5 = new HashMap();
        Map hashMap6 = new HashMap();
        boolean d10 = d4.d(list, arrayList);
        int s10 = s(list);
        if (!this.f46818q || d10) {
            i11 = s10;
            map2 = hashMap5;
            map3 = hashMap6;
            hashMap = hashMap4;
            list2 = null;
        } else {
            Iterator it = o10.iterator();
            List list6 = null;
            while (true) {
                if (!it.hasNext()) {
                    Map map6 = hashMap6;
                    i11 = s10;
                    map2 = hashMap5;
                    map3 = map6;
                    z12 = K;
                    hashMap = hashMap4;
                    break;
                }
                z12 = K;
                hashMap = hashMap4;
                Pair C = C(i10, list, (List) it.next(), arrayList, H, s10, hashMap5, hashMap6);
                Map map7 = hashMap6;
                i11 = s10;
                map2 = hashMap5;
                map3 = map7;
                list6 = t(e10, (List) C.first);
                if (list6 != null && !d4.a(map2, map3, list6)) {
                    list6 = null;
                }
                if (list6 != null) {
                    if (d4.c(this.f46812k, list6)) {
                        break;
                    }
                    list6 = null;
                }
                map2.clear();
                map3.clear();
                hashMap5 = map2;
                s10 = i11;
                hashMap6 = map3;
                hashMap4 = hashMap;
                K = z12;
            }
            if (list6 == null && !z12) {
                throw new IllegalArgumentException("No supported surface combination is found for camera device - Id : " + this.f46810i + ".  May be attempting to bind too many use cases. Existing surfaces: " + list + " New configs: " + arrayList);
            }
            list2 = list6;
        }
        Iterator it2 = o10.iterator();
        int i13 = Integer.MAX_VALUE;
        int i14 = Integer.MAX_VALUE;
        int i15 = Integer.MAX_VALUE;
        boolean z13 = false;
        boolean z14 = false;
        List list7 = null;
        List list8 = null;
        while (true) {
            if (!it2.hasNext()) {
                map4 = map3;
                list3 = list2;
                str = str3;
                str2 = str4;
                i12 = i15;
                map5 = map2;
                list4 = list7;
                break;
            }
            List list9 = (List) it2.next();
            Map map8 = map2;
            int i16 = i11;
            str = str3;
            map4 = map3;
            int i17 = i14;
            list3 = list2;
            int i18 = i13;
            str2 = str4;
            map5 = map8;
            Pair C2 = C(i10, list, list9, arrayList, H, i16, null, null);
            List list10 = (List) C2.first;
            int intValue = ((Integer) C2.second).intValue();
            boolean z15 = D == null || i16 <= intValue || intValue >= ((Integer) D.getLower()).intValue();
            if (!z13 && c(e10, list10)) {
                if (i17 == i18 || i17 < intValue) {
                    list7 = list9;
                    i17 = intValue;
                }
                if (z15) {
                    if (z14) {
                        list4 = list9;
                        i14 = intValue;
                        i12 = i15;
                        break;
                    }
                    list7 = list9;
                    i17 = intValue;
                    z13 = true;
                }
            }
            if (list3 == null || z14 || t(e10, list10) == null) {
                i15 = i15;
            } else {
                int i19 = i15;
                if (i19 != i18 && i19 >= intValue) {
                    i15 = i19;
                } else {
                    list8 = list9;
                    i15 = intValue;
                }
                if (!z15) {
                    continue;
                } else if (z13) {
                    i12 = intValue;
                    list4 = list7;
                    list5 = list9;
                    i14 = i17;
                    break;
                } else {
                    list8 = list9;
                    i15 = intValue;
                    z14 = true;
                }
            }
            i11 = i16;
            i13 = i18;
            i14 = i17;
            map2 = map5;
            str4 = str2;
            list2 = list3;
            map3 = map4;
            str3 = str;
        }
        list5 = list8;
        if (list4 != null) {
            Range p10 = D != null ? p(D, i14) : null;
            for (a0.x2 x2Var2 : arrayList) {
                m2.a f11 = a0.m2.a((Size) list4.get(H.indexOf(Integer.valueOf(arrayList.indexOf(x2Var2))))).b((x.z) b2.e.g((x.z) g10.get(x2Var2))).d(d4.e(x2Var2)).f(z11);
                if (p10 != null) {
                    f11.c(p10);
                }
                hashMap.put(x2Var2, f11.a());
            }
            if (list3 != null && i14 == i12 && list4.size() == list5.size()) {
                for (int i20 = 0; i20 < list4.size(); i20++) {
                    if (((Size) list4.get(i20)).equals(list5.get(i20))) {
                    }
                }
                hashMap2 = hashMap3;
                if (!d4.k(this.f46812k, list, hashMap, hashMap2)) {
                    d4.l(hashMap, hashMap2, map5, map4, list3);
                }
                return new Pair(hashMap, hashMap2);
            }
            hashMap2 = hashMap3;
            return new Pair(hashMap, hashMap2);
        }
        throw new IllegalArgumentException(str2 + this.f46810i + " and Hardware level: " + this.f46814m + ". May be the specified resolution is too large and not supported. Existing surfaces: " + list + str + arrayList);
    }

    a0.p2 F(int i10) {
        if (!this.f46822u.contains(Integer.valueOf(i10))) {
            O(this.f46821t.j(), i0.d.f27200e, i10);
            O(this.f46821t.h(), i0.d.f27202g, i10);
            N(this.f46821t.d(), i10);
            P(this.f46821t.l(), i10);
            this.f46822u.add(Integer.valueOf(i10));
        }
        return this.f46821t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0.o2 M(int i10, int i11, Size size) {
        return a0.o2.h(i10, i11, size, F(i11));
    }

    List a(List list, int i10) {
        Rational rational;
        int a10 = this.f46824w.a(this.f46810i, this.f46812k);
        if (a10 != 0) {
            if (a10 != 1) {
                if (a10 != 2) {
                    rational = null;
                } else {
                    Size c10 = F(IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER).c(IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
                    rational = new Rational(c10.getWidth(), c10.getHeight());
                }
            } else {
                rational = b0.a.f6018c;
            }
        } else {
            rational = b0.a.f6016a;
        }
        if (rational != null) {
            ArrayList arrayList = new ArrayList();
            ArrayList arrayList2 = new ArrayList();
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Size size = (Size) it.next();
                if (b0.a.a(size, rational)) {
                    arrayList.add(size);
                } else {
                    arrayList2.add(size);
                }
            }
            arrayList2.addAll(0, arrayList);
            list = arrayList2;
        }
        return this.f46825x.a(a0.o2.e(i10), list);
    }

    boolean c(b bVar, List list) {
        boolean z10 = false;
        for (a0.n2 n2Var : B(bVar)) {
            if (n2Var.d(list) != null) {
                z10 = true;
                continue;
            } else {
                z10 = false;
                continue;
            }
            if (z10) {
                break;
            }
        }
        return z10;
    }

    List t(b bVar, List list) {
        if (!d4.n(bVar)) {
            return null;
        }
        for (a0.n2 n2Var : this.f46809h) {
            List d10 = n2Var.d(list);
            if (d10 != null) {
                return d10;
            }
        }
        return null;
    }

    private void b() {
    }
}
