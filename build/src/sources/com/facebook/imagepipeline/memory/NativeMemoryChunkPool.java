package com.facebook.imagepipeline.memory;

import va.a0;
import va.z;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeMemoryChunkPool extends f {
    @o8.d
    public NativeMemoryChunkPool(r8.d dVar, z zVar, a0 a0Var) {
        super(dVar, zVar, a0Var);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: E */
    public NativeMemoryChunk g(int i10) {
        return new NativeMemoryChunk(i10);
    }
}
