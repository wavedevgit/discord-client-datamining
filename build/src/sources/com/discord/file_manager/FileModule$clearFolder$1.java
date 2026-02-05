package com.discord.file_manager;

import com.facebook.react.bridge.Promise;
import java.io.File;
import java.util.HashMap;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import ur.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_manager.FileModule$clearFolder$1", f = "FileModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nFileModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$clearFolder$1\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,320:1\n13472#2,2:321\n*S KotlinDebug\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$clearFolder$1\n*L\n278#1:321,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class FileModule$clearFolder$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $path;
    final /* synthetic */ Promise $promise;
    final /* synthetic */ String $storageDir;
    int label;
    final /* synthetic */ FileModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileModule$clearFolder$1(FileModule fileModule, String str, Promise promise, String str2, Continuation<? super FileModule$clearFolder$1> continuation) {
        super(2, continuation);
        this.this$0 = fileModule;
        this.$storageDir = str;
        this.$promise = promise;
        this.$path = str2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new FileModule$clearFolder$1(this.this$0, this.$storageDir, this.$promise, this.$path, continuation);
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
                    File[] listFiles = file.listFiles();
                    boolean z10 = false;
                    if (listFiles != null) {
                        for (File file2 : listFiles) {
                            file2.delete();
                        }
                    }
                    Promise promise = this.$promise;
                    File[] listFiles2 = file.listFiles();
                    if (listFiles2 != null && listFiles2.length == 0) {
                        z10 = true;
                    }
                    promise.resolve(kotlin.coroutines.jvm.internal.b.a(z10));
                } catch (Exception e10) {
                    this.$promise.reject("err", "Cannot clear the folder", e10);
                }
                return Unit.f31988a;
            }
            Promise promise2 = this.$promise;
            String str2 = this.$storageDir;
            hashMap2 = this.this$0.storageDirs;
            promise2.reject("err", "Unknown storage directory " + str2 + ". Supported storage directories: " + hashMap2.keySet());
            return Unit.f31988a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileModule$clearFolder$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
