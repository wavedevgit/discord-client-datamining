package com.facebook.react.fabric.mounting.mountitems;

import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.fabric.FabricUIManager;
import com.facebook.react.fabric.events.EventEmitterWrapper;
import com.facebook.react.fabric.mounting.MountingManager;
import com.facebook.react.fabric.mounting.SurfaceMountingManager;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.uimanager.StateWrapper;
import java.util.Arrays;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import org.jetbrains.annotations.NotNull;
import qb.a;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0015\n\u0000\n\u0002\u0010\u0011\n\u0002\u0010\u0000\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\b\u0001\u0018\u0000 \u001b2\u00020\u0001:\u0001\u001bB/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u000e\u0010\u0006\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\b0\u0007\u0012\u0006\u0010\t\u001a\u00020\u0003¢\u0006\u0004\b\n\u0010\u000bJ\u0010\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0002J\b\u0010\u0013\u001a\u00020\u0010H\u0002J\u0010\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0015\u001a\u00020\u0016H\u0016J\b\u0010\u0017\u001a\u00020\u0003H\u0016J\b\u0010\u0018\u001a\u00020\u0019H\u0016J\b\u0010\u001a\u001a\u00020\u0012H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0018\u0010\u0006\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\b0\u0007X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\fR\u000e\u0010\t\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/facebook/react/fabric/mounting/mountitems/IntBufferBatchMountItem;", "Lcom/facebook/react/fabric/mounting/mountitems/BatchMountItem;", "surfaceId", "", "intBuffer", "", "objBuffer", "", "", "commitNumber", "<init>", "(I[I[Ljava/lang/Object;I)V", "[Ljava/lang/Object;", "intBufferLen", "objBufferLen", "beginMarkers", "", "reason", "", "endMarkers", "execute", "mountingManager", "Lcom/facebook/react/fabric/mounting/MountingManager;", "getSurfaceId", "isBatchEmpty", "", "toString", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class IntBufferBatchMountItem implements BatchMountItem {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int INSTRUCTION_CREATE = 2;
    public static final int INSTRUCTION_DELETE = 4;
    public static final int INSTRUCTION_FLAG_MULTIPLE = 1;
    public static final int INSTRUCTION_INSERT = 8;
    public static final int INSTRUCTION_REMOVE = 16;
    public static final int INSTRUCTION_UPDATE_EVENT_EMITTER = 256;
    public static final int INSTRUCTION_UPDATE_LAYOUT = 128;
    public static final int INSTRUCTION_UPDATE_OVERFLOW_INSET = 1024;
    public static final int INSTRUCTION_UPDATE_PADDING = 512;
    public static final int INSTRUCTION_UPDATE_PROPS = 32;
    public static final int INSTRUCTION_UPDATE_STATE = 64;
    @NotNull
    private static final String TAG;
    private final int commitNumber;
    @NotNull
    private final int[] intBuffer;
    private final int intBufferLen;
    @NotNull
    private final Object[] objBuffer;
    private final int objBufferLen;
    private final int surfaceId;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\r\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0014\u001a\u00020\u00052\u0006\u0010\u0015\u001a\u00020\tH\u0002R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\tX\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/facebook/react/fabric/mounting/mountitems/IntBufferBatchMountItem$Companion;", "", "<init>", "()V", "TAG", "", "getTAG", "()Ljava/lang/String;", "INSTRUCTION_FLAG_MULTIPLE", "", "INSTRUCTION_CREATE", "INSTRUCTION_DELETE", "INSTRUCTION_INSERT", "INSTRUCTION_REMOVE", "INSTRUCTION_UPDATE_PROPS", "INSTRUCTION_UPDATE_STATE", "INSTRUCTION_UPDATE_LAYOUT", "INSTRUCTION_UPDATE_EVENT_EMITTER", "INSTRUCTION_UPDATE_PADDING", "INSTRUCTION_UPDATE_OVERFLOW_INSET", "nameForInstructionString", "type", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String nameForInstructionString(int i10) {
            if (i10 != 2) {
                if (i10 != 4) {
                    if (i10 != 8) {
                        if (i10 != 16) {
                            if (i10 != 32) {
                                if (i10 != 64) {
                                    if (i10 != 128) {
                                        if (i10 != 256) {
                                            if (i10 != 512) {
                                                if (i10 != 1024) {
                                                    return "UNKNOWN";
                                                }
                                                return "UPDATE_OVERFLOW_INSET";
                                            }
                                            return "UPDATE_PADDING";
                                        }
                                        return "UPDATE_EVENT_EMITTER";
                                    }
                                    return "UPDATE_LAYOUT";
                                }
                                return "UPDATE_STATE";
                            }
                            return "UPDATE_PROPS";
                        }
                        return "REMOVE";
                    }
                    return "INSERT";
                }
                return "DELETE";
            }
            return "CREATE";
        }

        @NotNull
        public final String getTAG() {
            return IntBufferBatchMountItem.TAG;
        }

        private Companion() {
        }
    }

    static {
        String simpleName = IntBufferBatchMountItem.class.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        TAG = simpleName;
    }

    public IntBufferBatchMountItem(int i10, @NotNull int[] intBuffer, @NotNull Object[] objBuffer, int i11) {
        Intrinsics.checkNotNullParameter(intBuffer, "intBuffer");
        Intrinsics.checkNotNullParameter(objBuffer, "objBuffer");
        this.surfaceId = i10;
        this.intBuffer = intBuffer;
        this.objBuffer = objBuffer;
        this.commitNumber = i11;
        this.intBufferLen = intBuffer.length;
        this.objBufferLen = objBuffer.length;
    }

    private final void beginMarkers(String str) {
        a.c(0L, "IntBufferBatchMountItem::" + str);
        int i10 = this.commitNumber;
        if (i10 > 0) {
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_BATCH_EXECUTION_START, null, i10);
        }
    }

    private final void endMarkers() {
        int i10 = this.commitNumber;
        if (i10 > 0) {
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_BATCH_EXECUTION_END, null, i10);
        }
        a.i(0L);
    }

    @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
    public void execute(@NotNull MountingManager mountingManager) {
        int i10;
        int i11;
        int i12;
        ReadableMap readableMap;
        boolean z10;
        int i13;
        int i14;
        int i15;
        Intrinsics.checkNotNullParameter(mountingManager, "mountingManager");
        SurfaceMountingManager surfaceManager = mountingManager.getSurfaceManager(this.surfaceId);
        if (surfaceManager == null) {
            p8.a.o(TAG, "Skipping batch of MountItems; no SurfaceMountingManager found for [%d].", Integer.valueOf(this.surfaceId));
        } else if (surfaceManager.isStopped()) {
            p8.a.o(TAG, "Skipping batch of MountItems; was stopped [%d].", Integer.valueOf(this.surfaceId));
        } else {
            if (ReactNativeFeatureFlags.enableFabricLogs()) {
                p8.a.c(TAG, "Executing IntBufferBatchMountItem on surface [%d]", Integer.valueOf(this.surfaceId));
            }
            beginMarkers("mountViews");
            int i16 = 0;
            int i17 = 0;
            while (i16 < this.intBufferLen) {
                int[] iArr = this.intBuffer;
                int i18 = i16 + 1;
                int i19 = iArr[i16];
                int i20 = i19 & (-2);
                if ((i19 & 1) != 0) {
                    int i21 = iArr[i18];
                    i18 = i16 + 2;
                    i10 = i21;
                } else {
                    i10 = 1;
                }
                int i22 = 2;
                a.d(0L, "IntBufferBatchMountItem::mountInstructions::" + Companion.nameForInstructionString(i20), new String[]{"numInstructions", String.valueOf(i10)}, 2);
                int i23 = 0;
                int i24 = i17;
                while (i23 < i10) {
                    if (i20 != i22) {
                        if (i20 != 4) {
                            if (i20 != 8) {
                                if (i20 != 16) {
                                    if (i20 != 32) {
                                        if (i20 != 64) {
                                            if (i20 != 128) {
                                                if (i20 != 256) {
                                                    if (i20 != 512) {
                                                        if (i20 == 1024) {
                                                            int[] iArr2 = this.intBuffer;
                                                            i15 = i18 + 5;
                                                            surfaceManager.updateOverflowInset(iArr2[i18], iArr2[i18 + 1], iArr2[i18 + 2], iArr2[i18 + 3], iArr2[i18 + 4]);
                                                        } else {
                                                            throw new IllegalArgumentException("Invalid type argument to IntBufferBatchMountItem: " + i20 + " at index: " + i18);
                                                        }
                                                    } else {
                                                        int[] iArr3 = this.intBuffer;
                                                        i15 = i18 + 5;
                                                        surfaceManager.updatePadding(iArr3[i18], iArr3[i18 + 1], iArr3[i18 + 2], iArr3[i18 + 3], iArr3[i18 + 4]);
                                                    }
                                                    i12 = i23;
                                                    i18 = i15;
                                                    i11 = i22;
                                                } else {
                                                    int i25 = i24 + 1;
                                                    EventEmitterWrapper eventEmitterWrapper = (EventEmitterWrapper) this.objBuffer[i24];
                                                    if (eventEmitterWrapper != null) {
                                                        surfaceManager.updateEventEmitter(this.intBuffer[i18], eventEmitterWrapper);
                                                        i24 = i25;
                                                        i18++;
                                                    } else {
                                                        i24 = i25;
                                                    }
                                                    i11 = i22;
                                                    i12 = i23;
                                                }
                                            } else {
                                                int[] iArr4 = this.intBuffer;
                                                i11 = i22;
                                                i12 = i23;
                                                surfaceManager.updateLayout(iArr4[i18], iArr4[i18 + 1], iArr4[i18 + 2], iArr4[i18 + 3], iArr4[i18 + 4], iArr4[i18 + 5], iArr4[i18 + 6], iArr4[i18 + 7]);
                                                i18 += 8;
                                            }
                                        } else {
                                            i11 = i22;
                                            i12 = i23;
                                            i13 = i18 + 1;
                                            i14 = i24 + 1;
                                            surfaceManager.updateState(this.intBuffer[i18], (StateWrapper) this.objBuffer[i24]);
                                        }
                                    } else {
                                        i11 = i22;
                                        i12 = i23;
                                        i13 = i18 + 1;
                                        i14 = i24 + 1;
                                        surfaceManager.updateProps(this.intBuffer[i18], (ReadableMap) this.objBuffer[i24]);
                                    }
                                    i18 = i13;
                                    i24 = i14;
                                } else {
                                    i11 = i22;
                                    i12 = i23;
                                    int[] iArr5 = this.intBuffer;
                                    int i26 = i18 + 2;
                                    i18 += 3;
                                    surfaceManager.removeViewAt(iArr5[i18], iArr5[i18 + 1], iArr5[i26]);
                                }
                            } else {
                                i11 = i22;
                                i12 = i23;
                                int[] iArr6 = this.intBuffer;
                                int i27 = iArr6[i18];
                                int i28 = i18 + 2;
                                i18 += 3;
                                surfaceManager.addViewAt(iArr6[i18 + 1], i27, iArr6[i28]);
                            }
                        } else {
                            i11 = i22;
                            i12 = i23;
                            surfaceManager.deleteView(this.intBuffer[i18]);
                            i18++;
                        }
                    } else {
                        i11 = i22;
                        i12 = i23;
                        int i29 = i24 + 1;
                        String str = (String) this.objBuffer[i24];
                        if (str == null) {
                            str = "";
                        }
                        String fabricComponentName = FabricNameComponentMapping.getFabricComponentName(str);
                        int[] iArr7 = this.intBuffer;
                        int i30 = iArr7[i18];
                        Object[] objArr = this.objBuffer;
                        ReadableMap readableMap2 = (ReadableMap) objArr[i29];
                        int i31 = i24 + 3;
                        StateWrapper stateWrapper = (StateWrapper) objArr[i24 + 2];
                        i24 += 4;
                        EventEmitterWrapper eventEmitterWrapper2 = (EventEmitterWrapper) objArr[i31];
                        int i32 = i18 + 2;
                        if (iArr7[i18 + 1] == 1) {
                            readableMap = readableMap2;
                            z10 = true;
                        } else {
                            readableMap = readableMap2;
                            z10 = false;
                        }
                        surfaceManager.createView(fabricComponentName, i30, readableMap, stateWrapper, eventEmitterWrapper2, z10);
                        i18 = i32;
                    }
                    i23 = i12 + 1;
                    i22 = i11;
                }
                a.i(0L);
                i16 = i18;
                i17 = i24;
            }
            endMarkers();
        }
    }

    @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
    public int getSurfaceId() {
        return this.surfaceId;
    }

    @Override // com.facebook.react.fabric.mounting.mountitems.BatchMountItem
    public boolean isBatchEmpty() {
        if (this.intBufferLen == 0) {
            return true;
        }
        return false;
    }

    @NotNull
    public String toString() {
        String str;
        int i10;
        int i11;
        int i12;
        int i13;
        try {
            StringBuilder sb2 = new StringBuilder();
            StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
            int i14 = 1;
            String format = String.format(Locale.ROOT, "IntBufferBatchMountItem [surface:%d]:\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.surfaceId)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "format(...)");
            sb2.append(format);
            int i15 = 0;
            int i16 = 0;
            while (i15 < this.intBufferLen) {
                int[] iArr = this.intBuffer;
                int i17 = i15 + 1;
                int i18 = iArr[i15];
                int i19 = i18 & (-2);
                if ((i18 & i14) != 0) {
                    int i20 = i15 + 2;
                    i10 = iArr[i17];
                    i17 = i20;
                } else {
                    i10 = i14;
                }
                i15 = i17;
                int i21 = 0;
                while (i21 < i10) {
                    if (i19 != 2) {
                        if (i19 != 4) {
                            if (i19 != 8) {
                                if (i19 != 16) {
                                    String str2 = "<hidden>";
                                    if (i19 != 32) {
                                        if (i19 != 64) {
                                            if (i19 != 128) {
                                                if (i19 != 256) {
                                                    if (i19 != 512) {
                                                        if (i19 == 1024) {
                                                            StringCompanionObject stringCompanionObject2 = StringCompanionObject.INSTANCE;
                                                            int i22 = i15 + 4;
                                                            i15 += 5;
                                                            String format2 = String.format(Locale.ROOT, "UPDATE OVERFLOWINSET [%d]: left:%d top:%d right:%d bottom:%d\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), Integer.valueOf(this.intBuffer[i15 + 1]), Integer.valueOf(this.intBuffer[i15 + 2]), Integer.valueOf(this.intBuffer[i15 + 3]), Integer.valueOf(this.intBuffer[i22])}, 5));
                                                            Intrinsics.checkNotNullExpressionValue(format2, "format(...)");
                                                            sb2.append(format2);
                                                        } else {
                                                            String str3 = TAG;
                                                            p8.a.m(str3, "String so far: " + ((Object) sb2));
                                                            throw new IllegalArgumentException("Invalid type argument to IntBufferBatchMountItem: " + i19 + " at index: " + i15);
                                                        }
                                                    } else {
                                                        StringCompanionObject stringCompanionObject3 = StringCompanionObject.INSTANCE;
                                                        int i23 = i15 + 4;
                                                        i15 += 5;
                                                        String format3 = String.format(Locale.ROOT, "UPDATE PADDING [%d]: top:%d right:%d bottom:%d left:%d\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), Integer.valueOf(this.intBuffer[i15 + 1]), Integer.valueOf(this.intBuffer[i15 + 2]), Integer.valueOf(this.intBuffer[i15 + 3]), Integer.valueOf(this.intBuffer[i23])}, 5));
                                                        Intrinsics.checkNotNullExpressionValue(format3, "format(...)");
                                                        sb2.append(format3);
                                                    }
                                                } else {
                                                    i16++;
                                                    StringCompanionObject stringCompanionObject4 = StringCompanionObject.INSTANCE;
                                                    i11 = i15 + 1;
                                                    String format4 = String.format(Locale.ROOT, "UPDATE EVENTEMITTER [%d]\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15])}, 1));
                                                    Intrinsics.checkNotNullExpressionValue(format4, "format(...)");
                                                    sb2.append(format4);
                                                }
                                            } else {
                                                StringCompanionObject stringCompanionObject5 = StringCompanionObject.INSTANCE;
                                                int i24 = i15 + 7;
                                                i15 += 8;
                                                String format5 = String.format(Locale.ROOT, "UPDATE LAYOUT [%d]->[%d]: x:%d y:%d w:%d h:%d displayType:%d layoutDirection:%d\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), Integer.valueOf(this.intBuffer[i15 + 1]), Integer.valueOf(this.intBuffer[i15 + 2]), Integer.valueOf(this.intBuffer[i15 + 3]), Integer.valueOf(this.intBuffer[i15 + 4]), Integer.valueOf(this.intBuffer[i15 + 5]), Integer.valueOf(this.intBuffer[i15 + 6]), Integer.valueOf(this.intBuffer[i24])}, 8));
                                                Intrinsics.checkNotNullExpressionValue(format5, "format(...)");
                                                sb2.append(format5);
                                            }
                                        } else {
                                            i12 = i16 + 1;
                                            StateWrapper stateWrapper = (StateWrapper) this.objBuffer[i16];
                                            if (FabricUIManager.IS_DEVELOPMENT_ENVIRONMENT && (stateWrapper == null || (str2 = stateWrapper.toString()) == null)) {
                                                str2 = "<null>";
                                            }
                                            StringCompanionObject stringCompanionObject6 = StringCompanionObject.INSTANCE;
                                            i13 = i15 + 1;
                                            String format6 = String.format(Locale.ROOT, "UPDATE STATE [%d]: %s\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), str2}, 2));
                                            Intrinsics.checkNotNullExpressionValue(format6, "format(...)");
                                            sb2.append(format6);
                                        }
                                    } else {
                                        i12 = i16 + 1;
                                        Object obj = this.objBuffer[i16];
                                        if (FabricUIManager.IS_DEVELOPMENT_ENVIRONMENT && (obj == null || (str2 = obj.toString()) == null)) {
                                            str2 = "<null>";
                                        }
                                        StringCompanionObject stringCompanionObject7 = StringCompanionObject.INSTANCE;
                                        i13 = i15 + 1;
                                        String format7 = String.format(Locale.ROOT, "UPDATE PROPS [%d]: %s\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), str2}, 2));
                                        Intrinsics.checkNotNullExpressionValue(format7, "format(...)");
                                        sb2.append(format7);
                                    }
                                    i16 = i12;
                                    i15 = i13;
                                } else {
                                    StringCompanionObject stringCompanionObject8 = StringCompanionObject.INSTANCE;
                                    int i25 = i15 + 2;
                                    i15 += 3;
                                    String format8 = String.format(Locale.ROOT, "REMOVE [%d]->[%d] @%d\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), Integer.valueOf(this.intBuffer[i15 + 1]), Integer.valueOf(this.intBuffer[i25])}, 3));
                                    Intrinsics.checkNotNullExpressionValue(format8, "format(...)");
                                    sb2.append(format8);
                                }
                            } else {
                                StringCompanionObject stringCompanionObject9 = StringCompanionObject.INSTANCE;
                                int i26 = i15 + 2;
                                i15 += 3;
                                String format9 = String.format(Locale.ROOT, "INSERT [%d]->[%d] @%d\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), Integer.valueOf(this.intBuffer[i15 + 1]), Integer.valueOf(this.intBuffer[i26])}, 3));
                                Intrinsics.checkNotNullExpressionValue(format9, "format(...)");
                                sb2.append(format9);
                            }
                        } else {
                            StringCompanionObject stringCompanionObject10 = StringCompanionObject.INSTANCE;
                            i11 = i15 + 1;
                            String format10 = String.format(Locale.ROOT, "DELETE [%d]\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15])}, 1));
                            Intrinsics.checkNotNullExpressionValue(format10, "format(...)");
                            sb2.append(format10);
                        }
                        i15 = i11;
                    } else {
                        String str4 = (String) this.objBuffer[i16];
                        if (str4 == null) {
                            str4 = "";
                        }
                        String fabricComponentName = FabricNameComponentMapping.getFabricComponentName(str4);
                        i16 += 4;
                        StringCompanionObject stringCompanionObject11 = StringCompanionObject.INSTANCE;
                        int i27 = i15 + 1;
                        i15 += 2;
                        String format11 = String.format(Locale.ROOT, "CREATE [%d] - layoutable:%d - %s\n", Arrays.copyOf(new Object[]{Integer.valueOf(this.intBuffer[i15]), Integer.valueOf(this.intBuffer[i27]), fabricComponentName}, 3));
                        Intrinsics.checkNotNullExpressionValue(format11, "format(...)");
                        sb2.append(format11);
                    }
                    i21++;
                    i14 = 1;
                }
            }
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
            return sb3;
        } catch (Exception e10) {
            p8.a.n(TAG, "Caught exception trying to print", e10);
            StringBuilder sb4 = new StringBuilder();
            for (int i28 = 0; i28 < this.intBufferLen; i28++) {
                sb4.append(this.intBuffer[i28]);
                sb4.append(", ");
            }
            p8.a.m(TAG, sb4.toString());
            for (int i29 = 0; i29 < this.objBufferLen; i29++) {
                String str5 = TAG;
                Object obj2 = this.objBuffer[i29];
                if (obj2 != null) {
                    str = String.valueOf(obj2);
                } else {
                    str = "null";
                }
                p8.a.m(str5, str);
            }
            return "";
        }
    }
}
