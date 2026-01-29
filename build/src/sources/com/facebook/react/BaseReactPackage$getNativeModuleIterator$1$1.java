package com.facebook.react;

import com.facebook.react.BaseReactPackage;
import com.facebook.react.bridge.ModuleHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import java.util.Iterator;
import java.util.Map;
import java.util.NoSuchElementException;
import kotlin.Metadata;
import kotlin.jvm.internal.markers.KMappedMarker;
@Metadata(d1 = {"\u0000-\n\u0000\n\u0002\u0010(\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010&\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002*\u0001\u0000\b\n\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001J\b\u0010\u000b\u001a\u00020\fH\u0002J\t\u0010\r\u001a\u00020\u000eH\u0096\u0002J\t\u0010\u000f\u001a\u00020\u0002H\u0096\u0002R(\u0010\u0003\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0004X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\n¨\u0006\u0010"}, d2 = {"com/facebook/react/BaseReactPackage$getNativeModuleIterator$1$1", "", "Lcom/facebook/react/bridge/ModuleHolder;", "nextEntry", "", "", "Lcom/facebook/react/module/model/ReactModuleInfo;", "getNextEntry", "()Ljava/util/Map$Entry;", "setNextEntry", "(Ljava/util/Map$Entry;)V", "findNext", "", "hasNext", "", "next", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BaseReactPackage$getNativeModuleIterator$1$1 implements Iterator<ModuleHolder>, KMappedMarker {
    final /* synthetic */ Iterator<Map.Entry<String, ReactModuleInfo>> $entrySetIterator;
    final /* synthetic */ ReactApplicationContext $reactContext;
    private Map.Entry<String, ReactModuleInfo> nextEntry;
    final /* synthetic */ BaseReactPackage this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    public BaseReactPackage$getNativeModuleIterator$1$1(Iterator<? extends Map.Entry<String, ReactModuleInfo>> it, BaseReactPackage baseReactPackage, ReactApplicationContext reactApplicationContext) {
        this.$entrySetIterator = it;
        this.this$0 = baseReactPackage;
        this.$reactContext = reactApplicationContext;
    }

    /* JADX WARN: Removed duplicated region for block: B:4:0x0008  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void findNext() {
        /*
            r3 = this;
        L0:
            java.util.Iterator<java.util.Map$Entry<java.lang.String, com.facebook.react.module.model.ReactModuleInfo>> r0 = r3.$entrySetIterator
            boolean r0 = r0.hasNext()
            if (r0 == 0) goto L26
            java.util.Iterator<java.util.Map$Entry<java.lang.String, com.facebook.react.module.model.ReactModuleInfo>> r0 = r3.$entrySetIterator
            java.lang.Object r0 = r0.next()
            java.util.Map$Entry r0 = (java.util.Map.Entry) r0
            java.lang.Object r1 = r0.getValue()
            com.facebook.react.module.model.ReactModuleInfo r1 = (com.facebook.react.module.model.ReactModuleInfo) r1
            boolean r2 = com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags.useTurboModules()
            if (r2 == 0) goto L23
            boolean r1 = r1.isTurboModule()
            if (r1 == 0) goto L23
            goto L0
        L23:
            r3.nextEntry = r0
            return
        L26:
            r0 = 0
            r3.nextEntry = r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.BaseReactPackage$getNativeModuleIterator$1$1.findNext():void");
    }

    public final Map.Entry<String, ReactModuleInfo> getNextEntry() {
        return this.nextEntry;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        if (this.nextEntry == null) {
            findNext();
        }
        if (this.nextEntry != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    public final void setNextEntry(Map.Entry<String, ReactModuleInfo> entry) {
        this.nextEntry = entry;
    }

    /* JADX WARN: Can't rename method to resolve collision */
    @Override // java.util.Iterator
    public ModuleHolder next() {
        if (this.nextEntry == null) {
            findNext();
        }
        Map.Entry<String, ReactModuleInfo> entry = this.nextEntry;
        if (entry != null) {
            findNext();
            return new ModuleHolder(entry.getValue(), new BaseReactPackage.ModuleHolderProvider(this.this$0, entry.getKey(), this.$reactContext));
        }
        throw new NoSuchElementException("ModuleHolder not found");
    }
}
