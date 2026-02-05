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
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import ur.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_manager.FileModule$moveFile$1", f = "FileModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nFileModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$moveFile$1\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,320:1\n1#2:321\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class FileModule$moveFile$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $destinationPath;
    final /* synthetic */ Promise $promise;
    final /* synthetic */ String $sourcePath;
    final /* synthetic */ String $storageDir;
    int label;
    final /* synthetic */ FileModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileModule$moveFile$1(FileModule fileModule, String str, Promise promise, String str2, String str3, Continuation<? super FileModule$moveFile$1> continuation) {
        super(2, continuation);
        this.this$0 = fileModule;
        this.$storageDir = str;
        this.$promise = promise;
        this.$sourcePath = str2;
        this.$destinationPath = str3;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new FileModule$moveFile$1(this.this$0, this.$storageDir, this.$promise, this.$sourcePath, this.$destinationPath, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        HashMap hashMap;
        String str;
        HashMap hashMap2;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            try {
                hashMap = this.this$0.storageDirs;
                str = (String) hashMap.get(this.$storageDir);
            } catch (Exception e10) {
                this.$promise.reject("err", "Error moving file", e10);
            }
            if (str == null) {
                Promise promise = this.$promise;
                String str2 = this.$storageDir;
                hashMap2 = this.this$0.storageDirs;
                Set keySet = hashMap2.keySet();
                promise.reject("err", "Unknown storage directory '" + str2 + "'. Supported storage directories: " + keySet);
                return Unit.f31988a;
            }
            File file = new File(str, this.$sourcePath);
            File file2 = new File(str, this.$destinationPath);
            File parentFile = file2.getParentFile();
            if (parentFile != null) {
                parentFile.mkdirs();
                if (file.renameTo(file2)) {
                    this.$promise.resolve(kotlin.coroutines.jvm.internal.b.a(true));
                } else {
                    if (!file.exists()) {
                        this.$promise.resolve(kotlin.coroutines.jvm.internal.b.a(false));
                    }
                    Promise promise2 = this.$promise;
                    String str3 = this.$sourcePath;
                    String str4 = this.$destinationPath;
                    promise2.reject("err", "Failed to move file from " + str3 + " to " + str4);
                }
                return Unit.f31988a;
            }
            throw new IllegalArgumentException("Parent file should not be null");
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileModule$moveFile$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
