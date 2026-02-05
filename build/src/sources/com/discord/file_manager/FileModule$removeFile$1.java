package com.discord.file_manager;

import com.facebook.react.bridge.Promise;
import java.io.File;
import java.util.HashMap;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import ur.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_manager.FileModule$removeFile$1", f = "FileModule.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class FileModule$removeFile$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $path;
    final /* synthetic */ Promise $promise;
    final /* synthetic */ String $storageDir;
    int label;
    final /* synthetic */ FileModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileModule$removeFile$1(FileModule fileModule, String str, Promise promise, String str2, Continuation<? super FileModule$removeFile$1> continuation) {
        super(2, continuation);
        this.this$0 = fileModule;
        this.$storageDir = str;
        this.$promise = promise;
        this.$path = str2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new FileModule$removeFile$1(this.this$0, this.$storageDir, this.$promise, this.$path, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        HashMap hashMap;
        HashMap hashMap2;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            hashMap = this.this$0.storageDirs;
            String str = (String) hashMap.get(this.$storageDir);
            if (str != null && !StringsKt.k0(str)) {
                try {
                    File file = new File(str, this.$path);
                    if (file.exists()) {
                        file.delete();
                        this.$promise.resolve(kotlin.coroutines.jvm.internal.b.a(file.delete()));
                    } else {
                        this.$promise.resolve(kotlin.coroutines.jvm.internal.b.a(false));
                    }
                } catch (Exception e10) {
                    this.$promise.reject("err", "Cannot delete the file", e10);
                }
                return Unit.f31988a;
            }
            Promise promise = this.$promise;
            String str2 = this.$storageDir;
            hashMap2 = this.this$0.storageDirs;
            Set keySet = hashMap2.keySet();
            promise.reject("err", "Unknown storage directory " + str2 + ". Supported storage directories: " + keySet);
            return Unit.f31988a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileModule$removeFile$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
