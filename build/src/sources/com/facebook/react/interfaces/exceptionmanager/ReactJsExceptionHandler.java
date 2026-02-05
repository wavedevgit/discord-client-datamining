package com.facebook.react.interfaces.exceptionmanager;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.common.annotations.UnstableReactNativeAPI;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\bá\u0080\u0001\u0018\u00002\u00020\u0001:\u0003\u0006\u0007\bJ\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\tÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler;", "", "reportJsException", "", "errorMap", "Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedError;", "ProcessedError", "ProcessedErrorStackFrameImpl", "ProcessedErrorImpl", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@UnstableReactNativeAPI
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ReactJsExceptionHandler {

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\bg\u0018\u00002\u00020\u0001:\u0001\u001cR\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0014\u0010\u0006\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\u0005R\u0014\u0010\b\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\t\u0010\u0005R\u0014\u0010\n\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\u0005R\u0018\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\rX¦\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010R\u0012\u0010\u0011\u001a\u00020\u0012X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0014R\u0012\u0010\u0015\u001a\u00020\u0016X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0015\u0010\u0017R\u0012\u0010\u0018\u001a\u00020\u0019X¦\u0004¢\u0006\u0006\u001a\u0004\b\u001a\u0010\u001bø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u001dÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedError;", "", "message", "", "getMessage", "()Ljava/lang/String;", StackTraceHelper.ORIGINAL_MESSAGE_KEY, "getOriginalMessage", StackTraceHelper.NAME_KEY, "getName", StackTraceHelper.COMPONENT_STACK_KEY, "getComponentStack", StackTraceHelper.STACK_KEY, "", "Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedError$StackFrame;", "getStack", "()Ljava/util/List;", StackTraceHelper.ID_KEY, "", "getId", "()I", StackTraceHelper.IS_FATAL_KEY, "", "()Z", "extraData", "Lcom/facebook/react/bridge/ReadableMap;", "getExtraData", "()Lcom/facebook/react/bridge/ReadableMap;", "StackFrame", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ProcessedError {

        @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0005\bg\u0018\u00002\u00020\u0001R\u0014\u0010\u0002\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0012\u0010\u0006\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\u0005R\u0014\u0010\b\u001a\u0004\u0018\u00010\tX¦\u0004¢\u0006\u0006\u001a\u0004\b\n\u0010\u000bR\u0014\u0010\f\u001a\u0004\u0018\u00010\tX¦\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\u000bø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u000eÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedError$StackFrame;", "", "file", "", "getFile", "()Ljava/lang/String;", "methodName", "getMethodName", "lineNumber", "", "getLineNumber", "()Ljava/lang/Integer;", "column", "getColumn", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public interface StackFrame {
            Integer getColumn();

            String getFile();

            Integer getLineNumber();

            @NotNull
            String getMethodName();
        }

        String getComponentStack();

        @NotNull
        ReadableMap getExtraData();

        int getId();

        @NotNull
        String getMessage();

        String getName();

        String getOriginalMessage();

        @NotNull
        List<StackFrame> getStack();

        boolean isFatal();
    }

    @Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0019\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0083\b\u0018\u00002\u00020\u0001BS\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\u000f¢\u0006\u0004\b\u0010\u0010\u0011J\t\u0010\u001e\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010 \u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010!\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000f\u0010\"\u001a\b\u0012\u0004\u0012\u00020\t0\bHÆ\u0003J\t\u0010#\u001a\u00020\u000bHÆ\u0003J\t\u0010$\u001a\u00020\rHÆ\u0003J\t\u0010%\u001a\u00020\u000fHÆ\u0003Je\u0010&\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b2\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\r2\b\b\u0002\u0010\u000e\u001a\u00020\u000fHÆ\u0001J\u0013\u0010'\u001a\u00020\r2\b\u0010(\u001a\u0004\u0018\u00010)HÖ\u0003J\t\u0010*\u001a\u00020\u000bHÖ\u0001J\t\u0010+\u001a\u00020\u0003HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0016\u0010\u0005\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013R\u0016\u0010\u0006\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0013R\u001a\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0014\u0010\n\u001a\u00020\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0014\u0010\f\u001a\u00020\rX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u001bR\u0014\u0010\u000e\u001a\u00020\u000fX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001d¨\u0006,"}, d2 = {"Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedErrorImpl;", "Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedError;", "message", "", StackTraceHelper.ORIGINAL_MESSAGE_KEY, StackTraceHelper.NAME_KEY, StackTraceHelper.COMPONENT_STACK_KEY, StackTraceHelper.STACK_KEY, "Ljava/util/ArrayList;", "Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedErrorStackFrameImpl;", StackTraceHelper.ID_KEY, "", StackTraceHelper.IS_FATAL_KEY, "", "extraData", "Lcom/facebook/react/bridge/ReadableNativeMap;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/ArrayList;IZLcom/facebook/react/bridge/ReadableNativeMap;)V", "getMessage", "()Ljava/lang/String;", "getOriginalMessage", "getName", "getComponentStack", "getStack", "()Ljava/util/ArrayList;", "getId", "()I", "()Z", "getExtraData", "()Lcom/facebook/react/bridge/ReadableNativeMap;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "equals", "other", "", "hashCode", "toString", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class ProcessedErrorImpl implements ProcessedError {
        private final String componentStack;
        @NotNull
        private final ReadableNativeMap extraData;

        /* renamed from: id  reason: collision with root package name */
        private final int f11139id;
        private final boolean isFatal;
        @NotNull
        private final String message;
        private final String name;
        private final String originalMessage;
        @NotNull
        private final ArrayList<ProcessedErrorStackFrameImpl> stack;

        public ProcessedErrorImpl(@NotNull String message, String str, String str2, String str3, @NotNull ArrayList<ProcessedErrorStackFrameImpl> stack, int i10, boolean z10, @NotNull ReadableNativeMap extraData) {
            Intrinsics.checkNotNullParameter(message, "message");
            Intrinsics.checkNotNullParameter(stack, "stack");
            Intrinsics.checkNotNullParameter(extraData, "extraData");
            this.message = message;
            this.originalMessage = str;
            this.name = str2;
            this.componentStack = str3;
            this.stack = stack;
            this.f11139id = i10;
            this.isFatal = z10;
            this.extraData = extraData;
        }

        public static /* synthetic */ ProcessedErrorImpl copy$default(ProcessedErrorImpl processedErrorImpl, String str, String str2, String str3, String str4, ArrayList arrayList, int i10, boolean z10, ReadableNativeMap readableNativeMap, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = processedErrorImpl.message;
            }
            if ((i11 & 2) != 0) {
                str2 = processedErrorImpl.originalMessage;
            }
            if ((i11 & 4) != 0) {
                str3 = processedErrorImpl.name;
            }
            if ((i11 & 8) != 0) {
                str4 = processedErrorImpl.componentStack;
            }
            ArrayList<ProcessedErrorStackFrameImpl> arrayList2 = arrayList;
            if ((i11 & 16) != 0) {
                arrayList2 = processedErrorImpl.stack;
            }
            if ((i11 & 32) != 0) {
                i10 = processedErrorImpl.f11139id;
            }
            if ((i11 & 64) != 0) {
                z10 = processedErrorImpl.isFatal;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                readableNativeMap = processedErrorImpl.extraData;
            }
            boolean z11 = z10;
            ReadableNativeMap readableNativeMap2 = readableNativeMap;
            ArrayList arrayList3 = arrayList2;
            int i12 = i10;
            return processedErrorImpl.copy(str, str2, str3, str4, arrayList3, i12, z11, readableNativeMap2);
        }

        @NotNull
        public final String component1() {
            return this.message;
        }

        public final String component2() {
            return this.originalMessage;
        }

        public final String component3() {
            return this.name;
        }

        public final String component4() {
            return this.componentStack;
        }

        @NotNull
        public final ArrayList<ProcessedErrorStackFrameImpl> component5() {
            return this.stack;
        }

        public final int component6() {
            return this.f11139id;
        }

        public final boolean component7() {
            return this.isFatal;
        }

        @NotNull
        public final ReadableNativeMap component8() {
            return this.extraData;
        }

        @NotNull
        public final ProcessedErrorImpl copy(@NotNull String message, String str, String str2, String str3, @NotNull ArrayList<ProcessedErrorStackFrameImpl> stack, int i10, boolean z10, @NotNull ReadableNativeMap extraData) {
            Intrinsics.checkNotNullParameter(message, "message");
            Intrinsics.checkNotNullParameter(stack, "stack");
            Intrinsics.checkNotNullParameter(extraData, "extraData");
            return new ProcessedErrorImpl(message, str, str2, str3, stack, i10, z10, extraData);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ProcessedErrorImpl) {
                ProcessedErrorImpl processedErrorImpl = (ProcessedErrorImpl) obj;
                return Intrinsics.areEqual(this.message, processedErrorImpl.message) && Intrinsics.areEqual(this.originalMessage, processedErrorImpl.originalMessage) && Intrinsics.areEqual(this.name, processedErrorImpl.name) && Intrinsics.areEqual(this.componentStack, processedErrorImpl.componentStack) && Intrinsics.areEqual(this.stack, processedErrorImpl.stack) && this.f11139id == processedErrorImpl.f11139id && this.isFatal == processedErrorImpl.isFatal && Intrinsics.areEqual(this.extraData, processedErrorImpl.extraData);
            }
            return false;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        public String getComponentStack() {
            return this.componentStack;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        public int getId() {
            return this.f11139id;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        @NotNull
        public String getMessage() {
            return this.message;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        public String getName() {
            return this.name;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        public String getOriginalMessage() {
            return this.originalMessage;
        }

        public int hashCode() {
            int hashCode = this.message.hashCode() * 31;
            String str = this.originalMessage;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            String str2 = this.name;
            int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.componentStack;
            return ((((((((hashCode3 + (str3 != null ? str3.hashCode() : 0)) * 31) + this.stack.hashCode()) * 31) + Integer.hashCode(this.f11139id)) * 31) + Boolean.hashCode(this.isFatal)) * 31) + this.extraData.hashCode();
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        public boolean isFatal() {
            return this.isFatal;
        }

        @NotNull
        public String toString() {
            String str = this.message;
            String str2 = this.originalMessage;
            String str3 = this.name;
            String str4 = this.componentStack;
            ArrayList<ProcessedErrorStackFrameImpl> arrayList = this.stack;
            int i10 = this.f11139id;
            boolean z10 = this.isFatal;
            ReadableNativeMap readableNativeMap = this.extraData;
            return "ProcessedErrorImpl(message=" + str + ", originalMessage=" + str2 + ", name=" + str3 + ", componentStack=" + str4 + ", stack=" + arrayList + ", id=" + i10 + ", isFatal=" + z10 + ", extraData=" + readableNativeMap + ")";
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        @NotNull
        public ReadableNativeMap getExtraData() {
            return this.extraData;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError
        @NotNull
        public ArrayList<ProcessedErrorStackFrameImpl> getStack() {
            return this.stack;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0083\b\u0018\u00002\u00020\u0001B-\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\b\u0010\tJ\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0013\u001a\u0004\u0018\u00010\u0006HÆ\u0003¢\u0006\u0002\u0010\u000eJ\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0006HÆ\u0003¢\u0006\u0002\u0010\u000eJ<\u0010\u0015\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006HÆ\u0001¢\u0006\u0002\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0006HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0016\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0014\u0010\u0004\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0018\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\r\u0010\u000eR\u0018\u0010\u0007\u001a\u0004\u0018\u00010\u0006X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\u0010\u0010\u000e¨\u0006\u001d"}, d2 = {"Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedErrorStackFrameImpl;", "Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedError$StackFrame;", "file", "", "methodName", "lineNumber", "", "column", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;)V", "getFile", "()Ljava/lang/String;", "getMethodName", "getLineNumber", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getColumn", "component1", "component2", "component3", "component4", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;)Lcom/facebook/react/interfaces/exceptionmanager/ReactJsExceptionHandler$ProcessedErrorStackFrameImpl;", "equals", "", "other", "", "hashCode", "toString", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ProcessedErrorStackFrameImpl implements ProcessedError.StackFrame {
        private final Integer column;
        private final String file;
        private final Integer lineNumber;
        @NotNull
        private final String methodName;

        public ProcessedErrorStackFrameImpl(String str, @NotNull String methodName, Integer num, Integer num2) {
            Intrinsics.checkNotNullParameter(methodName, "methodName");
            this.file = str;
            this.methodName = methodName;
            this.lineNumber = num;
            this.column = num2;
        }

        public static /* synthetic */ ProcessedErrorStackFrameImpl copy$default(ProcessedErrorStackFrameImpl processedErrorStackFrameImpl, String str, String str2, Integer num, Integer num2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = processedErrorStackFrameImpl.file;
            }
            if ((i10 & 2) != 0) {
                str2 = processedErrorStackFrameImpl.methodName;
            }
            if ((i10 & 4) != 0) {
                num = processedErrorStackFrameImpl.lineNumber;
            }
            if ((i10 & 8) != 0) {
                num2 = processedErrorStackFrameImpl.column;
            }
            return processedErrorStackFrameImpl.copy(str, str2, num, num2);
        }

        public final String component1() {
            return this.file;
        }

        @NotNull
        public final String component2() {
            return this.methodName;
        }

        public final Integer component3() {
            return this.lineNumber;
        }

        public final Integer component4() {
            return this.column;
        }

        @NotNull
        public final ProcessedErrorStackFrameImpl copy(String str, @NotNull String methodName, Integer num, Integer num2) {
            Intrinsics.checkNotNullParameter(methodName, "methodName");
            return new ProcessedErrorStackFrameImpl(str, methodName, num, num2);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ProcessedErrorStackFrameImpl) {
                ProcessedErrorStackFrameImpl processedErrorStackFrameImpl = (ProcessedErrorStackFrameImpl) obj;
                return Intrinsics.areEqual(this.file, processedErrorStackFrameImpl.file) && Intrinsics.areEqual(this.methodName, processedErrorStackFrameImpl.methodName) && Intrinsics.areEqual(this.lineNumber, processedErrorStackFrameImpl.lineNumber) && Intrinsics.areEqual(this.column, processedErrorStackFrameImpl.column);
            }
            return false;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError.StackFrame
        public Integer getColumn() {
            return this.column;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError.StackFrame
        public String getFile() {
            return this.file;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError.StackFrame
        public Integer getLineNumber() {
            return this.lineNumber;
        }

        @Override // com.facebook.react.interfaces.exceptionmanager.ReactJsExceptionHandler.ProcessedError.StackFrame
        @NotNull
        public String getMethodName() {
            return this.methodName;
        }

        public int hashCode() {
            String str = this.file;
            int hashCode = (((str == null ? 0 : str.hashCode()) * 31) + this.methodName.hashCode()) * 31;
            Integer num = this.lineNumber;
            int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
            Integer num2 = this.column;
            return hashCode2 + (num2 != null ? num2.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            String str = this.file;
            String str2 = this.methodName;
            Integer num = this.lineNumber;
            Integer num2 = this.column;
            return "ProcessedErrorStackFrameImpl(file=" + str + ", methodName=" + str2 + ", lineNumber=" + num + ", column=" + num2 + ")";
        }
    }

    void reportJsException(@NotNull ProcessedError processedError);
}
