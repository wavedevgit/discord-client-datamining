package com.discord.media.engine.types;

import com.discord.p000native.engine.AudioInputDeviceDescription;
import com.discord.p000native.engine.AudioOutputDeviceDescription;
import com.discord.p000native.engine.ConnectionInfo;
import com.discord.p000native.engine.VideoInputDeviceDescription;
import com.discord.p000native.engine.VideoInputDeviceFacing;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import lr.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0000\n\u0002\u0010 \n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u001a)\u0010\u0000\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00060\u0005H\u0000¢\u0006\u0002\u0010\u0007\u001a)\u0010\u0000\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00020\u0001*\b\u0012\u0004\u0012\u00020\b0\u0005H\u0000¢\u0006\u0002\u0010\t\u001a)\u0010\u0000\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00020\u0001*\b\u0012\u0004\u0012\u00020\n0\u0005H\u0000¢\u0006\u0002\u0010\u000b\u001a\u0018\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002*\u00020\u0006H\u0000\u001a\u0018\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002*\u00020\rH\u0000¨\u0006\u000e"}, d2 = {"toListOfMaps", "", "", "", "", "", "Lcom/discord/native/engine/AudioInputDeviceDescription;", "([Lcom/discord/native/engine/AudioInputDeviceDescription;)Ljava/util/List;", "Lcom/discord/native/engine/AudioOutputDeviceDescription;", "([Lcom/discord/native/engine/AudioOutputDeviceDescription;)Ljava/util/List;", "Lcom/discord/native/engine/VideoInputDeviceDescription;", "([Lcom/discord/native/engine/VideoInputDeviceDescription;)Ljava/util/List;", "toMap", "Lcom/discord/native/engine/ConnectionInfo;", "media_engine_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNativeTypeExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NativeTypeExtensions.kt\ncom/discord/media/engine/types/NativeTypeExtensionsKt\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,62:1\n11318#2:63\n11429#2,4:64\n11318#2:68\n11429#2,4:69\n23663#2,10:73\n1573#3:83\n1604#3,4:84\n1#4:88\n*S KotlinDebug\n*F\n+ 1 NativeTypeExtensions.kt\ncom/discord/media/engine/types/NativeTypeExtensionsKt\n*L\n10#1:63\n10#1:64,4\n19#1:68\n19#1:69,4\n29#1:73,10\n33#1:83\n33#1:84,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeTypeExtensionsKt {

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[VideoInputDeviceFacing.values().length];
            try {
                iArr[VideoInputDeviceFacing.Front.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[VideoInputDeviceFacing.Back.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    @NotNull
    public static final List<Map<String, Object>> toListOfMaps(@NotNull AudioInputDeviceDescription[] audioInputDeviceDescriptionArr) {
        Intrinsics.checkNotNullParameter(audioInputDeviceDescriptionArr, "<this>");
        ArrayList arrayList = new ArrayList(audioInputDeviceDescriptionArr.length);
        int length = audioInputDeviceDescriptionArr.length;
        int i10 = 0;
        int i11 = 0;
        while (i10 < length) {
            AudioInputDeviceDescription audioInputDeviceDescription = audioInputDeviceDescriptionArr[i10];
            arrayList.add(o0.m(v.a(StackTraceHelper.NAME_KEY, audioInputDeviceDescription.getName()), v.a("guid", audioInputDeviceDescription.getGuid()), v.a("index", Integer.valueOf(i11))));
            i10++;
            i11++;
        }
        return arrayList;
    }

    @NotNull
    public static final Map<String, Object> toMap(@NotNull AudioInputDeviceDescription audioInputDeviceDescription) {
        Intrinsics.checkNotNullParameter(audioInputDeviceDescription, "<this>");
        return o0.m(v.a(StackTraceHelper.NAME_KEY, audioInputDeviceDescription.getName()), v.a("guid", audioInputDeviceDescription.getGuid()));
    }

    @NotNull
    public static final Map<String, Object> toMap(@NotNull ConnectionInfo connectionInfo) {
        Intrinsics.checkNotNullParameter(connectionInfo, "<this>");
        Pair a10 = v.a("protocol", connectionInfo.getProtocol());
        Pair a11 = v.a("address", connectionInfo.getLocalAddress());
        Pair a12 = v.a("port", Integer.valueOf(connectionInfo.getLocalPort()));
        Integer createConnectionTime = connectionInfo.getCreateConnectionTime();
        Pair a13 = createConnectionTime != null ? v.a("createConnectionTime", Integer.valueOf(createConnectionTime.intValue())) : null;
        Integer connectTime = connectionInfo.getConnectTime();
        return o0.u(CollectionsKt.q(a10, a11, a12, a13, connectTime != null ? v.a("connectTime", Integer.valueOf(connectTime.intValue())) : null));
    }

    @NotNull
    public static final List<Map<String, Object>> toListOfMaps(@NotNull AudioOutputDeviceDescription[] audioOutputDeviceDescriptionArr) {
        Intrinsics.checkNotNullParameter(audioOutputDeviceDescriptionArr, "<this>");
        ArrayList arrayList = new ArrayList(audioOutputDeviceDescriptionArr.length);
        int length = audioOutputDeviceDescriptionArr.length;
        int i10 = 0;
        int i11 = 0;
        while (i10 < length) {
            AudioOutputDeviceDescription audioOutputDeviceDescription = audioOutputDeviceDescriptionArr[i10];
            arrayList.add(o0.m(v.a(StackTraceHelper.NAME_KEY, audioOutputDeviceDescription.getName()), v.a("guid", audioOutputDeviceDescription.getGuid()), v.a("index", Integer.valueOf(i11))));
            i10++;
            i11++;
        }
        return arrayList;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @NotNull
    public static final List<Map<String, Object>> toListOfMaps(@NotNull VideoInputDeviceDescription[] videoInputDeviceDescriptionArr) {
        String str;
        Intrinsics.checkNotNullParameter(videoInputDeviceDescriptionArr, "<this>");
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        int i10 = 0;
        for (VideoInputDeviceDescription videoInputDeviceDescription : videoInputDeviceDescriptionArr) {
            if (videoInputDeviceDescription.getFacing() == VideoInputDeviceFacing.Front) {
                arrayList.add(videoInputDeviceDescription);
            } else {
                arrayList2.add(videoInputDeviceDescription);
            }
        }
        Pair pair = new Pair(arrayList, arrayList2);
        List l02 = CollectionsKt.l0(CollectionsKt.o(CollectionsKt.firstOrNull((List) pair.a()), CollectionsKt.firstOrNull((List) pair.b())));
        ArrayList arrayList3 = new ArrayList(CollectionsKt.w(l02, 10));
        for (Object obj : l02) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            VideoInputDeviceDescription videoInputDeviceDescription2 = (VideoInputDeviceDescription) obj;
            int i12 = WhenMappings.$EnumSwitchMapping$0[videoInputDeviceDescription2.getFacing().ordinal()];
            if (i12 == 1) {
                str = "front";
            } else if (i12 != 2) {
                str = "unknown";
            } else {
                str = "back";
            }
            arrayList3.add(o0.m(v.a(StackTraceHelper.NAME_KEY, videoInputDeviceDescription2.getName()), v.a("guid", videoInputDeviceDescription2.getGuid()), v.a("facing", str), v.a("index", Integer.valueOf(i10))));
            i10 = i11;
        }
        return arrayList3;
    }
}
