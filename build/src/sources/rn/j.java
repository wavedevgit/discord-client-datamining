package rn;

import android.content.Context;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraManager;
import android.hardware.camera2.params.StreamConfigurationMap;
import android.media.MediaRecorder;
import android.util.Range;
import android.util.Size;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import pn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f48982a;

        static {
            int[] iArr = new int[n.values().length];
            try {
                iArr[n.f49015d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[n.f49016e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[n.f49017i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f48982a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            l lVar = (l) obj2;
            l lVar2 = (l) obj;
            return or.a.d(Integer.valueOf(lVar.f().getWidth() * lVar.f().getHeight()), Integer.valueOf(lVar2.f().getWidth() * lVar2.f().getHeight()));
        }
    }

    public static final List a(Context context) {
        int i10;
        v.b bVar;
        StreamConfigurationMap streamConfigurationMap;
        String[] strArr;
        int i11;
        Range range;
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("camera");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.camera2.CameraManager");
        CameraManager cameraManager = (CameraManager) systemService;
        ArrayList arrayList = new ArrayList();
        String[] cameraIdList = cameraManager.getCameraIdList();
        Intrinsics.checkNotNullExpressionValue(cameraIdList, "getCameraIdList(...)");
        int length = cameraIdList.length;
        int i12 = 0;
        int i13 = 0;
        while (i13 < length) {
            String str = cameraIdList[i13];
            CameraCharacteristics cameraCharacteristics = cameraManager.getCameraCharacteristics(str);
            Intrinsics.checkNotNullExpressionValue(cameraCharacteristics, "getCameraCharacteristics(...)");
            Integer num = (Integer) cameraCharacteristics.get(CameraCharacteristics.LENS_FACING);
            Integer num2 = (Integer) cameraCharacteristics.get(CameraCharacteristics.SENSOR_ORIENTATION);
            if (num2 != null) {
                i10 = num2.intValue();
            } else {
                i10 = i12;
            }
            if (num != null && num.intValue() == 0) {
                bVar = v.b.f46370d;
            } else if (num != null && num.intValue() == 1) {
                bVar = v.b.f46371e;
            } else {
                bVar = v.b.f46372i;
            }
            v.b bVar2 = bVar;
            int[] iArr = (int[]) cameraCharacteristics.get(CameraCharacteristics.REQUEST_AVAILABLE_CAPABILITIES);
            if (iArr != null && (streamConfigurationMap = (StreamConfigurationMap) cameraCharacteristics.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP)) != null && kotlin.collections.i.L(iArr, i12)) {
                Range c10 = c(cameraCharacteristics, 30);
                Class<MediaRecorder> cls = MediaRecorder.class;
                Size[] outputSizes = streamConfigurationMap.getOutputSizes(cls);
                Intrinsics.checkNotNullExpressionValue(outputSizes, "getOutputSizes(...)");
                int length2 = outputSizes.length;
                int i14 = i12;
                while (i14 < length2) {
                    Size[] sizeArr = outputSizes;
                    Size size = sizeArr[i14];
                    int i15 = i13;
                    double outputMinFrameDuration = streamConfigurationMap.getOutputMinFrameDuration(cls, size) / 1.0E9d;
                    double d10 = 0.0d;
                    if (outputMinFrameDuration > 0.0d) {
                        d10 = 1.0d / outputMinFrameDuration;
                    }
                    Class<MediaRecorder> cls2 = cls;
                    double d11 = d10;
                    Intrinsics.checkNotNull(str);
                    Intrinsics.checkNotNull(size);
                    CameraManager cameraManager2 = cameraManager;
                    if (c10 == null) {
                        strArr = cameraIdList;
                        int i16 = (int) d11;
                        i11 = length;
                        range = new Range(Integer.valueOf(i16), Integer.valueOf(i16));
                    } else {
                        strArr = cameraIdList;
                        i11 = length;
                        range = c10;
                    }
                    arrayList.add(new l(str, size, d11, range, i10, bVar2, new o(0L, false, 3, null)));
                    i14++;
                    outputSizes = sizeArr;
                    length2 = length2;
                    cls = cls2;
                    i13 = i15;
                    cameraManager = cameraManager2;
                    cameraIdList = strArr;
                    length = i11;
                }
            }
            i13++;
            cameraManager = cameraManager;
            cameraIdList = cameraIdList;
            length = length;
            i12 = 0;
        }
        ArrayList arrayList2 = new ArrayList();
        for (Object obj : arrayList) {
            l lVar = (l) obj;
            if (lVar.f().getWidth() < 2000 && lVar.f().getHeight() < 2000) {
                arrayList2.add(obj);
            }
        }
        return arrayList2;
    }

    public static final m b(Context context, n cameraDirection) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraDirection, "cameraDirection");
        ArrayList arrayList = new ArrayList();
        for (Object obj : a(context)) {
            if (((l) obj).c() == d(cameraDirection)) {
                arrayList.add(obj);
            }
        }
        List W0 = CollectionsKt.W0(arrayList, new b());
        if (W0.isEmpty()) {
            return null;
        }
        return new m((l) CollectionsKt.o0(W0), CollectionsKt.a1(CollectionsKt.f0(W0, 1), 2));
    }

    private static final Range c(CameraCharacteristics cameraCharacteristics, int i10) {
        Range[] rangeArr = (Range[]) cameraCharacteristics.get(CameraCharacteristics.CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES);
        Range range = null;
        if (rangeArr == null || rangeArr.length == 0) {
            return null;
        }
        for (Range range2 : rangeArr) {
            Comparable upper = range2.getUpper();
            Intrinsics.checkNotNullExpressionValue(upper, "getUpper(...)");
            int intValue = ((Number) upper).intValue();
            if (intValue >= i10 && (range == null || intValue < ((Number) range.getUpper()).intValue())) {
                range = range2;
            }
        }
        if (range == null) {
            if (rangeArr.length != 0) {
                Range range3 = rangeArr[0];
                int a02 = kotlin.collections.i.a0(rangeArr);
                if (a02 == 0) {
                    return range3;
                }
                Integer num = (Integer) range3.getUpper();
                int i11 = 1;
                if (1 <= a02) {
                    while (true) {
                        Range range4 = rangeArr[i11];
                        Integer num2 = (Integer) range4.getUpper();
                        if (num.compareTo(num2) < 0) {
                            range3 = range4;
                            num = num2;
                        }
                        if (i11 == a02) {
                            break;
                        }
                        i11++;
                    }
                }
                return range3;
            }
            throw new NoSuchElementException();
        }
        return range;
    }

    private static final v.b d(n nVar) {
        int i10 = a.f48982a[nVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return v.b.f46372i;
                }
                throw new lr.p();
            }
            return v.b.f46371e;
        }
        return v.b.f46370d;
    }
}
